import { get_voucher_by_specified } from "@api/voucherApi";
import { usePostAuth } from "@hooks/api-hooks";
import useGuestCart from "@hooks/useGuestCart";
import useUserCart from "@hooks/useUserCart";
import useAuth from "@stores/useAuth";
import { message } from "antd";
import { useState } from "react";

const PAYMENT_METHOD = {
    cod: "COD",
}

export default function useVoucher() {

    const { accessToken } = useAuth();

    const { cart } = accessToken ? useUserCart() : useGuestCart();

    const [dataAfterVoucher, setDataAfterVoucher] = useState();

    const [couponList, setCouponList] = useState([]);

    const [isCouponOpen, setIsCouponOpen] = useState(false);

    const [isCouponForUser, setIsCouponForUser] = useState(false);

    const voucherInfo = cart?.map((item) => ({
        product_id: item._id,
        price: item.sale_price ? item.sale_price : item.regular_price,
    }));

    const { mutate: getSpecificVoucher } = usePostAuth(
        get_voucher_by_specified(),
        undefined,
        (data) => {
            setCouponList(data.data.metaData)
        },
        (error) => {
            message.error(error.response.data.error.message);
        }
    );

    const handleOpenCoupon = () => {
        if (accessToken) {
            getSpecificVoucher(voucherInfo)
            setIsCouponOpen(!isCouponOpen);
        }
        setIsCouponForUser(!isCouponForUser)

    }

    return {
        dataAfterVoucher,
        setDataAfterVoucher,
        couponList,
        handleOpenCoupon,
        isCouponOpen,
        isCouponForUser
    };
}
