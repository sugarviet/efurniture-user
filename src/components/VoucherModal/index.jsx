import formattedDate from "@utils/formattedDate";

function VoucherModal({ data, chooseVoucher, getTotalPrice, setChooseVoucher }) {
    return (
        <div>
            <>
                <figure
                    key={data._id}

                    className={`z-0 relative flex flex-row mx-4 mb-2 border-[0.0625rem] border-[#E8E8E8] border-l-0 rounded-tr-[0.125rem] round-br-[0.125rem] shadow-couponCard 
                        ${(data.used_turn_count === data.maximum_use_per_user) || (data.minimum_order_value > getTotalPrice()) ? "opacity-70" : "opacity-100"}
                        
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
                        {(data.used_turn_count === data.maximum_use_per_user) || (data.minimum_order_value > getTotalPrice())
                            ?
                            <div className={`rounded-[50%] border-grey3 border-[1px] w-5 h-5 cursor-not-allowed ${chooseVoucher === data._id ? "bg-blackPrimary " : "bg-grey5 "}`}></div>
                            :
                            <div onClick={() => setChooseVoucher(data._id)} className={`cursor-pointer rounded-[50%] border-grey3 border-[1px] w-5 h-5 ${chooseVoucher === data._id ? "bg-blackPrimary" : "bg-grey5 "}`}></div>
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
                {(data.used_turn_count !== data.maximum_use_per_user) && (data.minimum_order_value < getTotalPrice())
                    &&
                    <div className="mb-8"></div>
                }
                {data.used_turn_count === data.maximum_use_per_user
                    &&
                    <div className="flex flex-row gap-2 items-center mb-4 mx-4 ">
                        <img className="w-3 h-3" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1709925291/eFurniture/exclamation_ud637a.png"></img>
                        <p className="text-[#ee4d2d] text-[13px] leading-[1.4] tracking-[0.04em]"> You have used the maximum number of uses of this voucher</p>
                    </div>
                }
                {data.minimum_order_value > getTotalPrice()
                    &&
                    <div className="flex flex-row gap-2 items-center mb-4 mx-4 ">
                        <img className="w-3 h-3" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1709925291/eFurniture/exclamation_ud637a.png"></img>
                        <p className="text-[#ee4d2d] text-[13px] leading-[1.4] tracking-[0.04em]">  Your order has not reached the minimum value of this voucher</p>
                    </div>
                }
            </>
        </div>
    )
}

export default VoucherModal