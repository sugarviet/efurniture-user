import formattedCurrency from "../../utils/formattedCurrency";
import { FavoriteButton } from "../SymbolButton";
import useFurnitureCard from "./useFurnitureCard";

function FurnitureCard({ item }) {
  const { color, name, material, price } = item;

  const { model_state, dimension } = useFurnitureCard(item);

  return (
    <article className="w-full bg-white pb-[0.5rem]">
      <div className="relative flex items-center block mb-[0.9375rem] w-full h-60">
        {model_state[dimension].component}
        <div className="absolute top-4 right-4">
          <FavoriteButton />
          {model_state[dimension].change_dimension_button}
        </div>
      </div>
      <div className="px-[18px] flex flex-col justify-between gap-4">
        <div>
          <div className="pointer-events-none">
            <img className="h-[1.625rem]" src={color} />
          </div>
          <div className="text-xs tracking-[0.9px] text-black mt-[0.75rem]">
            <a href="#">{name}</a>
          </div>
          <div className="text-[0.6875rem] text-grey2 tracking-[0.5px]">
            {material}
          </div>
        </div>
        <div className="flex items-end gap-[0.8em] py-4">
          <div className="flex justify-between gap-[0.5rem] w-full text-blackPrimary text-left">
            <div className="flex flex-wrap">
              <div className="order-1 w-full flex-shrink-0 text-grey2 text-[0.6875rem] mb-[0.1875rem] tracking-[0.4px]">
                Rec. retail price
              </div>
              <span className="order-2 mr-[0.625rem] text-xs tracking-[0.9px] text-black">
                {formattedCurrency(price)}
              </span>
            </div>
            <p className="text-[0.6875rem] tracking-[0.4px] text-grey2 text-right">
              Prices from <br />
              <span>{formattedCurrency(price)}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FurnitureCard;
