import { useContext } from "react";
import formattedCurrency from "../../../../utils/formattedCurrency";
import { FurnitureCardContext } from "../../FurnitureCardContext";

function FurniturePrice() {
  const { furniture, onSale } = useContext(FurnitureCardContext);

  const { price } = furniture;

  return (
    <div className="flex items-end gap-[0.8em] py-4">
      <div className="flex justify-between gap-[0.5rem] w-full text-blackPrimary text-left">
        <div className="flex flex-wrap">
          <div className="order-1 w-full flex-shrink-0 text-grey2 text-[0.6875rem] mb-[0.1875rem] tracking-[0.4px]">
            Rec. retail price
          </div>
          <span className="order-2 mr-[0.625rem] text-xs tracking-[0.9px] text-black">
            <span>{formattedCurrency(price)}</span>

            {onSale ? (
              <span className="line-through">{formattedCurrency(price)}</span>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FurniturePrice;
