
import PropTypes from "prop-types";
import FormattedDate from "@utils/FormattedDate";
import { useState } from "react";
import {
    useFetchWithAuth,
} from "@hooks/api-hooks";
import { get_voucher_by_specified } from "@api/voucherApi";
import useUserCart from "@hooks/useUserCart";
import LoadingSpinner from "@components/LoadingSpinner";


function CouponListModal({ setIsModalCreateOpen, handleChooseVoucher }) {

    const { cart } = useUserCart();

    // const voucherInfo = cart?.map((item) => ({
    //     product_id: item._id,
    //     price: item.regular_price
    // }));

    // const { data, isLoading } = useFetchWithAuth(get_voucher_by_specified(), undefined, { voucherInfo });

    const data = null;
    const emptyVoucher = !data?.length;

    const [chooseVoucher, setChooseVoucher] = useState();

    const handleSaveChoosenVoucher = () => {
        handleChooseVoucher(chooseVoucher)
        setIsModalCreateOpen(false);

    }

    // if (isLoading) return <LoadingSpinner />;

    return (
        <section className="relative">
            <p className='font-HelveticaBold text-[1rem] leading-[1.20833] tracking-[0.08em] pb-6'>Choose eFurniture voucher</p>
            <div className={`max-w-[600px] pb-24 pt-5 ${emptyVoucher ? "h-[50px]" : "h-[500px] overflow-y-auto "}`}>
                {data?.map((voucher) => (
                    <figure
                        key={voucher._id}
                        onClick={() => setChooseVoucher(voucher._id)}
                        className={`flex flex-row mx-4 mb-6 border-[0.0625rem] border-[#E8E8E8] border-l-0 rounded-tr-[0.125rem] round-br-[0.125rem] shadow-couponCard ${chooseVoucher === voucher._id ? "opacity-100" : "opacity-70"}`}>
                        <img className="w-28" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1709351627/eFurniture/voucher-left_n2on4v.png"></img>
                        <article className="w-full ">
                            <div className="pl-3 py-3">
                                <p className='font-semibold text-[0.875rem] leading-[1.20833] tracking-[0.08em] pb-1'>{voucher.code}</p>
                                <p className='text-[0.875rem] leading-[1.20833] tracking-[0.08em]'>{voucher.value}% off Capped at ₫100k</p>
                                <p className='text-[0.875rem] leading-[1.20833] tracking-[0.08em]'>Min. Spend ₫{voucher.minimum_order_value}k</p>
                                <p className='text-[11px] leading-[1.20833] tracking-[0.08em] pt-2 text-grey1'>Valid Till: {FormattedDate(voucher.end_date)}</p>
                            </div>
                        </article>
                        <div className="flex justify-center items-center mr-3">
                            <div className={`cursor-pointer rounded-[50%] border-grey3 border-[1px] w-5 h-5 ${chooseVoucher === voucher._id ? "bg-blackPrimary" : "bg-grey5 "}`}></div>
                        </div>
                    </figure>
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
                        onClick={() => handleSaveChoosenVoucher(false)}
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
};

export default CouponListModal