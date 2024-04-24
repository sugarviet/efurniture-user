import { checkout_with_guest, checkout_with_user } from "@api/checkoutApi";
import { usePost, usePostAuth } from "@hooks/api-hooks";
import useGuestCart from "@hooks/useGuestCart";
import useUserCart from "@hooks/useUserCart";
import useAuth from "@stores/useAuth";
import { useOrderStore } from "@stores/useGuestOrderStore";
import { message } from "antd";
import useNavigation from "./useNavigation";
import useVoucher from "./useVoucher";

const PAYMENT_METHOD = {
    cod: "COD",
}

export default function useCheckoutSummary() {

    const { accessToken } = useAuth();

    const { go_to_payment, go_to_order_confirmation, go_to_pay_os } = useNavigation();

    const { cart, getTotalPrice } = accessToken ? useUserCart() : useGuestCart();

    const {
        selectedDelivery,
        selectedPayment,
        orderShipping,
        note,
    } = useOrderStore();

    const handlePaymentMethod = (metaData) => {
        const isDeposit = metaData.order_checkout.paid.type === "Deposit"
        const isCod = metaData.payment_method === PAYMENT_METHOD.cod;
        if (isDeposit && isCod) {
            window.location.href = metaData.order_checkout.pay_os.checkoutUrl
        }
        if (!isDeposit && isCod) {
            go_to_order_confirmation(metaData);
        }
        if (!isDeposit && !isCod) {
            window.location.href = metaData.order_checkout.pay_os.checkoutUrl
        }
    };

    const { mutate: checkoutForGuest } = usePost(
        checkout_with_guest(),
        undefined,
        (data) => {
            handlePaymentMethod(data.data.metaData);
        },
        (error) => {
            message.error(error.response.data.error.message);
        }
    );
    const { mutate: checkoutForUser } = usePostAuth(
        checkout_with_user(),
        undefined,
        (data) => {
            handlePaymentMethod(data.data.metaData);
        },
        (error) => {
            message.error(error.response.data.error.message);
        }
    );

    return {
        cart,
        getTotalPrice,
        selectedDelivery,
        selectedPayment,
        orderShipping,
        note,
        checkoutForGuest,
        checkoutForUser
    };
}
