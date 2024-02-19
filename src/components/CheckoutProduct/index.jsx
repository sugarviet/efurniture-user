import FurnitureCard from "../FurnitureCard"

const cartData = [
    {
        id: 1,
        url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw942c4640/images/2070000/2072765.jpg?sw=1000',
        name: 'SANTIAGO',
        quantity: 1,
        description: 'Santiago side table',
        size: 'H51xØ46cm',
        tableTop: 'brown ceramic',
        leg: 'dark oak veneer',
        itemNo: '3700AD400715702',
        price: 23390000
    },
    {
        id: 2,
        url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5f7ec034/images/2000000/2000028.jpg?sw=1000',
        name: 'KINGSTON',
        quantity: 2,
        description: 'Kingston office desk',
        size: 'H74½xW62xL125cm',
        tableTop: 'matt ash grey lacquered',
        leg: 'matt ash grey structure lacquered',
        itemNo: '370057000008128',
        price: 20690000
    },
    {
        id: 3,
        url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw05567dbf/images/2010000/2014249.jpg?sw=1000',
        name: 'MADRID',
        quantity: 3,
        description: 'Madrid side table',
        size: 'H51xØ46cm',
        tableTop: 'ash ceramic',
        leg: 'matt white structure lacquered',
        itemNo: '3700AD3801670322',
        price: 20690000
    }
]

function CheckoutProduct({activeTab}) {

    return (
        <section className="px-5 pb-6 lg:pl-[112px] lg:pr-[128px] lg:pb-0">
            {activeTab === "summary" &&
                <section>
                    <h2 className="text-[1.5rem] leading-[1.2] font-HelveticaBold tracking-[0.08em] pb-2">YOUR SUMMARY</h2>
                    <p className="text-[14px] leading-[23.3px] tracking-[0.5px] pb-2">Here is your overview - great choice! Check to make sure everything is in order before proceeding to payment.</p>
                    <p className="text-[14px] leading-[23.3px] tracking-[0.5px]">{cartData.length} items</p>
                </section>
            }
            <div className='pt-[2rem]'>
                <ul className='list-none'>
                    {cartData.map((cart, index) => (
                        <section key={index} className="text-[0.875rem] ">
                            <FurnitureCard item={cart} key={`${cart.name} + ${index}`} >
                                <FurnitureCard.Model className="w-full top-8 sm:top-20 md:top-32" />
                                <section className="flex flex-rol justify-between pt-[8%] sm:pt-[20%] md:pt-[28%]">
                                    <a href="#">
                                        <h2 className="text-[1.5rem] leading-[1.2] font-HelveticaBold tracking-[0.08em]">{cart.name}</h2>
                                    </a>
                                    <p className="text-blackPrimary">
                                        Qty: {cart.quantity}
                                    </p>
                                </section>
                                <div className="flex flex-col justify-between gap-4 ">
                                    <FurnitureCard.Detail />
                                </div>
                            </FurnitureCard>
                        </section>
                    ))}
                </ul>
            </div>
            <ul className="pt-8 list-none">
                <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
                    <span className="">Subtotal </span>
                    <span>₫ 64.770.000,00</span>
                </li>
                <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
                    <span className="">Store Contact </span>
                    <span>₫ 0,00</span>
                </li>
                <li className="flex flex-row justify-between items-center pt-8 text-[1rem] tracking-[0.08em] font-HelveticaBold">
                    <span className="">QUOTATION TOTAL </span>
                    <span>₫ 64.770.000,00</span>
                </li>
                <li className="flex flex-row justify-between items-center mt-[-0.3125rem] pb-[0.25rem] text-[0.75rem] leading-[2] tracking-[0.05em] text-grey1">
                    <span className="">VAT part of total </span>
                    <span>₫ 5.888.182,00</span>
                </li>
            </ul>
        </section>
    )
}

export default CheckoutProduct