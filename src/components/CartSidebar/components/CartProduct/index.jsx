

function CartProduct({ data }) {
    return (
        <section className="text-[0.875rem] my-6">
            <div className="flex items-center justify-end">
                <span className="text-[0.75rem] leading-[2] track-[0.05em] text-grey1 pr-[2px]">Remove</span>
                <img className="w-[15px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1702979086/Beana_svg/close_veco12_l3nivu.svg" />
            </div>
            <figure className="relative pt-[35%] mb-10 pr-[8rem] pl-[7rem]">
                <img className="h-auto max-h-full absolute top-6 left-1/2 -translate-x-1/2" src={data.img} />
            </figure>
            <section className="flex flex-rol justify-between pt-4">
                <a href="#">
                    <h2 className="text-[1.5rem] leading-[1.2] font-HelveticaBold tracking-[0.08em]">{data.name}</h2>
                </a>
                <div className="flex flex-row items-center">
                    <button className="px-[0.9375rem] text-[1.2rem] font-HelveticaBold opacity-[0.2]">-</button>
                    <div className=''>
                        <input
                            type='number'
                            defaultValue="1"
                            className='furniture-input-hide-arrow outline-none focus:border-b-[0.5px] focus:border-[#191915] text-center w-[2.5rem] h-[1.5em] text-[18px] text-[#000] font-medium font-HelveticaBold'
                        />
                    </div>
                    <button className="px-[0.9375rem] text-[1.2rem] font-HelveticaBold">+</button>
                </div>
            </section>
            <main className="flex flex-row justify-between pb-[2rem] text-[0.875rem] leading-[1.6] border-b-[0.0625rem] border-border">
                <div>
                    {data.description}
                    <ul className="list-none">
                        <li>
                            <span>Size: </span>
                            <span>{data.size}</span>
                        </li>
                        <li>
                            <span>Tabletop: </span>
                            <span>{data.tableTop}</span>
                        </li>
                        <li>
                            <span>Leg: </span>
                            <span>{data.leg}</span>
                        </li>
                        <li className="text-[0.75rem] leading-[2] tracking-[0.05em] text-grey1">
                            <span>Item no.: </span>
                            <span>{data.itemNo}</span>
                        </li>
                    </ul>
                    <nav className="mt-4">
                        <a className="underline text-[0.8125rem]" href="#">Edit details</a>
                    </nav>
                </div>
                <div className="text-right self-end">
                    <span>
                        ₫ 23.390.000,00
                    </span>
                </div>
            </main>
        </section>
    )
}

export default CartProduct