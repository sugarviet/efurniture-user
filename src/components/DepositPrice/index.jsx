import formattedCurrency from '../../utils/formattedCurrency'

function DepositPrice({ order }) {
    const isDepositPaid = order.order_checkout.paid.paid_amount > 0;
    const depositPrice = order.order_checkout.paid.must_paid
    return (
        <>
            <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
                <span className="">Deposit </span>
                <span>
                    {formattedCurrency(depositPrice)}
                </span>
            </li>
            <li className="flex justify-end text-sm tracking-[0.5px] leading-[23.3px]">
                {isDepositPaid ?
                    <span className='text-grey1 pb-4'>
                        (Deposit has been paid)
                    </span>
                    :
                    <span className='text-grey1 pb-4'>
                        (Deposit has been not paid)
                    </span>
                }

            </li>
        </>
    )
}

export default DepositPrice