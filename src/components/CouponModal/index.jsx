import formattedDate from "@utils/formattedDate";
import CouponError from "../CouponError";
import { useOrderStore } from "../../stores/useGuestOrderStore";

function CouponModal({ data, getTotalPrice }) {

    const { selectedCoupon, setSelectedCoupon } = useOrderStore();

    const isHideCoupon = (data.used_turn_count === data.maximum_use_per_user) || (data.minimum_order_value > getTotalPrice())

    const isUseCoupon = (data.used_turn_count !== data.maximum_use_per_user) && (data.minimum_order_value < getTotalPrice())

    const maxUsedCoupon = data.used_turn_count === data.maximum_use_per_user

    const notReachValueCoupon = data.minimum_order_value > getTotalPrice()

    const handleCouponSelection = (couponId) => {
        if (selectedCoupon === couponId) {
            setSelectedCoupon(null);
        } else {
            setSelectedCoupon(couponId);
        }
    };

    return (
        <div>
            <>
                <figure
                    key={data._id}
                    className={`z-0 relative flex flex-row mx-4 mb-2 border-[0.0625rem] border-[#E8E8E8] border-l-0 rounded-tr-[0.125rem] round-br-[0.125rem] shadow-couponCard 
                        ${isHideCoupon ? "opacity-70" : "opacity-100"}
                        
                        `}>
                    <img className="w-28" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1709351627/eFurniture/voucher-left_n2on4v.png"></img>
                    <article className="w-full ">
                        <div className="pl-3 py-3">
                            <p className='font-semibold text-[0.875rem] leading-[1.20833] tracking-[0.08em] pb-1'>{data.code}</p>
                            <p className='text-[0.875rem] leading-[1.20833] tracking-[0.08em]'>{data.value}% off Capped at ₫100k</p>
                            <p className='text-[0.875rem] leading-[1.20833] tracking-[0.08em]'>Min. Spend ₫{data.minimum_order_value / 1000000}M</p>
                            <p className='text-[11px] leading-[1.20833] tracking-[0.08em] pt-2 text-grey1'>{(data.used_turn_count / data.maximum_use) * 100}% used, Valid Till: {formattedDate(data.end_date)}</p>
                        </div>
                    </article>
                    <div className="flex justify-center items-center mr-3">
                        {isHideCoupon
                            ?
                            <div className={`rounded-[50%] border-grey3 border-[1px] w-5 h-5 cursor-not-allowed ${selectedCoupon === data._id ? "bg-blackPrimary " : "bg-grey5 "}`}></div>
                            :
                            <div onClick={() => handleCouponSelection(data._id)} className={`cursor-pointer rounded-[50%] border-grey3 border-[1px] w-5 h-5 ${selectedCoupon === data._id ? "bg-blackPrimary" : "bg-grey5 "}`}></div>
                        }
                    </div>
                    <div className="bg-white z-10 absolute right-[-5px] top-1 ">
                        <div className="rounded-l-[10px] z-20 bg-black/60 w-9 h-5 rounded-r-[1px] text-white">
                            <div className="flex justify-center items-center text-[13px]">
                                x{data.maximum_use}
                            </div>
                        </div>
                        <div className='absolute top-5 right-[1px] border-b-black border-b-4 border-r-4 border-r-transparent rotate-90'></div>
                    </div>
                </figure>
                {isUseCoupon
                    &&
                    <div className="mb-8"></div>
                }
                {maxUsedCoupon
                    &&
                    <CouponError type="maxUsed" />
                }
                {notReachValueCoupon
                    &&
                    <CouponError type="notReachValue" />
                }
            </>
        </div>
    )
}

export default CouponModal;
