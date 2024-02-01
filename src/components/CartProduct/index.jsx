import FurnitureCard from "../FurnitureCard"

function CartProduct({ data }) {
    return (
        <section className="text-[0.875rem] my-6">
            <div className="flex items-center justify-end">
                <span className="text-[0.75rem] leading-[2] track-[0.05em] text-grey1 pr-[2px]">Remove</span>
                <img className="w-[15px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1702979086/Beana_svg/close_veco12_l3nivu.svg" />
            </div>
            <FurnitureCard item={data} key={`${data.name}`} >
                <FurnitureCard.Model className="w-[60%]" />
                <section className="flex flex-rol justify-between">
                    <a href="#">
                        <h2 className="text-[1.5rem] leading-[1.2] font-HelveticaBold tracking-[0.08em]">{data.name}</h2>
                    </a>
                    <FurnitureCard.QuantityOption />
                </section>
                <div className="flex flex-col justify-between gap-4">
                    <FurnitureCard.Detail />
                </div>
            </FurnitureCard>
        </section>
    )
}

export default CartProduct