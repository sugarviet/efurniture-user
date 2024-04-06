const TYPES = {
    maxUsed:
    {
        message: 'You have used the maximum number of uses of this voucher'
    },
    notReachValue:
    {
        message: 'Your order has not reached the minimum value of this voucher'
    },
};

function CouponError({ type }) {

    const { message } = TYPES[type];

    return (
        <div className="flex flex-row gap-2 items-center mb-4 mx-4 ">
            <img className="w-3 h-3" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1709925291/eFurniture/exclamation_ud637a.png"></img>
            <p className="text-[#ee4d2d] text-[13px] leading-[1.4] tracking-[0.04em]"> {message}</p>
        </div>
    )
}

export default CouponError