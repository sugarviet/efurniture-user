import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";

function FurnitureDetail() {
    const { furniture } = useContext(FurnitureCardContext);

    const { description, size, tableTop, leg, itemNo } = furniture;

    return (
        <main className="flex flex-row justify-between pb-[2rem] text-[0.875rem] leading-[1.6] border-b-[0.0625rem] border-border">
            <div>
                {description}
                <ul className="list-none">
                    <li>
                        <span>Size: </span>
                        <span>{size}</span>
                    </li>
                    <li>
                        <span>Tabletop: </span>
                        <span>{tableTop}</span>
                    </li>
                    <li>
                        <span>Leg: </span>
                        <span>{leg}</span>
                    </li>
                    <li className="text-[0.75rem] leading-[2] tracking-[0.05em] text-grey1">
                        <span>Item no.: </span>
                        <span>{itemNo}</span>
                    </li>
                </ul>
                <nav className="mt-4">
                    <a className="underline text-[0.8125rem]" href="#">View details</a>
                </nav>
            </div>
            <div className="text-right self-end">
                <span>
                    ₫ 23.390.000,00
                </span>
            </div>
        </main>
    )
}

export default FurnitureDetail