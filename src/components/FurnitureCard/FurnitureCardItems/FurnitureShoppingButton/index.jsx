import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import { classNames } from "../../../../utils/classNames";

function FurnitureShoppingButton({ cartData }) {
  const { furniture, outOfStock } = useContext(FurnitureCardContext);
  const { addToCart } = cartData;

  return (
    <button
      type="button"
      disabled={outOfStock}
      className={classNames(
        "hover:scale-110 border hover:cursor-pointer duration-300 p-2 absolute bottom-4 right-0 h-12 w-12 flex-shrink-0  group-hover:text-gray-500",
        outOfStock
          ? "border-gray-200 text-gray-200"
          : "border-black text-slate-700"
      )}
      onClick={() => addToCart(furniture)}
    >
      <ShoppingBagIcon aria-hidden="true" />
    </button>
  );
}

export default FurnitureShoppingButton;
