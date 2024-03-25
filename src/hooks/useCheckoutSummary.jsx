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

    const { go_to_payment, go_to_order_confirmation } = useNavigation();

    const { cart, getTotalPrice } = accessToken ? useUserCart() : useGuestCart();

    const {
        selectedDelivery,
        selectedPayment,
        orderShipping,
        note,
    } = useOrderStore();

    const {
        dataAfterVoucher,
    } = useVoucher();

    const orderProducts = cart.map((cart) => ({
        product_id: cart._id,
        quantity: cart.quantity_in_cart,
        price: cart.sale_price > 0 ? cart.sale_price : cart.regular_price,
        name: cart.name,
        thumb: cart.thumbs[0]
    }))


    const handlePaymentMethod = (metaData) => {
        if (metaData.payment_method === PAYMENT_METHOD.cod) {
            go_to_order_confirmation(metaData);
        } else {
            go_to_payment(metaData);
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
            handlePaymentMethod(data.data.metaData)
        },
        (error) => {
            message.error(error.response.data.error.message);
        }
    );

    const onFinish = () => {
        accessToken ?
            checkoutForUser(
                {
                    order_products: orderProducts,
                    payment_method: selectedPayment,
                    order_shipping: orderShipping,
                    order_checkout: {
                        final_total: dataAfterVoucher ? dataAfterVoucher.order_total_after_voucher : getTotalPrice(),
                        voucher: dataAfterVoucher ? dataAfterVoucher.voucher : null,
                        total: getTotalPrice(),
                    },
                    note: note,
                }
            ) :
            checkoutForGuest(
                {
                    order_products: orderProducts,
                    payment_method: selectedPayment,
                    order_shipping: orderShipping,
                    order_checkout: {
                        final_total: getTotalPrice(),
                        total: getTotalPrice(),
                    },
                    note: note,
                }
            )
    };

    return {
        onFinish,
        getTotalPrice,
        selectedDelivery, 
        selectedPayment,
        orderShipping, 
        note
    };
}
