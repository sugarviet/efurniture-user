import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import formattedCurrency from "../../../../utils/formattedCurrency";

function FurnitureDetail() {
  const { furniture, onSale } = useContext(FurnitureCardContext);

  const { attributes, sale_price, regular_price } = furniture;

  const attributeKeys = Object.keys(attributes.attributeType);

  return (
    <main className="flex flex-row justify-between pb-[2rem] text-[0.875rem] leading-[1.6] border-b-[0.0625rem] border-border">
      <div>
        <ul className="list-none">
          {attributeKeys.map((key) => (
            <li key={key}>
              <span className="capitalize">{key}: </span>
              <span>{attributes.attributeType[key]}</span>
            </li>
          ))}
        </ul>
        <nav className="mt-4">
          <a className="underline text-[0.8125rem]" href="#">
            View details
          </a>
        </nav>
      </div>
      <div className="text-right self-end">
        {onSale && (
          <span className="line-through">
            {formattedCurrency(regular_price)}
          </span>
        )}
        <span className="ml-2">{formattedCurrency(sale_price)}</span>
      </div>
    </main>
  );
}

export default FurnitureDetail;
