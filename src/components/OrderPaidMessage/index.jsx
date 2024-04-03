import React from 'react'



function OrderPaidMessage({ order }) {
    const isNotOnlinePaid = order.order_checkout.is_paid == false && order.payment_method == "Online Payment"

    const isDepositPaid =order.order_checkout.paid.paid_amount == 0 && order.order_checkout.paid.type  == "Deposit"

    return (
        <p className="pt-2 leading-[1.4] tracking-[0.04em] text-[#ee4d2d]">
            {isNotOnlinePaid &&
                "*Order has not been paid yet"}
            {isDepositPaid &&
                "*Deposit has not been paid yet"}
        </p>
    )
}

export default OrderPaidMessage