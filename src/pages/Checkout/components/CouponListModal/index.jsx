
import {
    apply_voucher
} from "@api/voucherApi";
import {
    usePostAuth,
} from "@hooks/api-hooks";
import useUserCart from "@hooks/useUserCart";
import PropTypes from "prop-types";
import { useState } from "react";
import CouponModal from "../../../../components/CouponModal";
import useVoucher from "../../../../hooks/useVoucher";
import { useOrderStore } from "../../../../stores/useGuestOrderStore";

function CouponListModal({ setIsModalCreateOpen, setDataAfterVoucher }) {

    const { selectedCoupon } = useOrderStore();

    const { cart, getTotalPrice } = useUserCart();

    const {
        couponList,
    } = useVoucher();

    const productForVoucher = cart.map((item) => ({
        product_id: item._id,
        price: item.sale_price ? item.sale_price : item.regular_price,
        quantity: item.quantity_in_cart
    }));

    const { mutate: applyVoucher } = usePostAuth(
        apply_voucher(selectedCoupon),
        undefined,
        (data) => {
            setDataAfterVoucher(data.data.metaData);
        },
        (error) => {
            message.error(error.response.data.error.message);
        }
    );

    const emptyVoucher = !couponList?.data.metaData.length;

    const handleSaveChoosenVoucher = () => {
        if (selectedCoupon) {
            applyVoucher(productForVoucher);
        }
        setDataAfterVoucher(null)
        setIsModalCreateOpen(false);
    }

    return (
        <section className="relative">
            <p className='font-HelveticaBold text-[1rem] leading-[1.20833] tracking-[0.08em] pb-6'>Choose eFurniture voucher</p>
            <div className={`max-w-[600px] pb-24 pt-5 ${emptyVoucher ? "h-[50px]" : "h-[500px] overflow-y-auto "}`}>
                {couponList?.data.metaData.map((voucher) => (
                    <CouponModal
                        key={voucher._id}
                        data={voucher}
                        getTotalPrice={getTotalPrice}
                    />
                ))}
                {emptyVoucher
                    ? (
                        <p>No voucher available in your wallet</p>
                    ) : (
                        <p className="pl-3 text-grey2 text-[0.875rem] leading-[1.20833] tracking-[0.08em]">* Showing all claimed & available eFurniture vouchers in your wallet.</p>
                    )
                }
            </div>
            <section className="absolute bottom-0 right-0 bg-white w-full border-t-2">
                <div className="flex flex-row justify-end gap-4">
                    <button
                        onClick={() => setIsModalCreateOpen(false)}
                        className="furniture-button-white-hover px-[50px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-6"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => handleSaveChoosenVoucher()}
                        className="furniture-button-black-hover px-[50px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-6"
                    >
                        Apply
                    </button>
                </div>
            </section>
        </section>
    )
}

CouponListModal.propTypes = {
    setIsModalCreateOpen: PropTypes.func.isRequired,
    setDataAfterVoucher: PropTypes.func.isRequired,
};

export default CouponListModal