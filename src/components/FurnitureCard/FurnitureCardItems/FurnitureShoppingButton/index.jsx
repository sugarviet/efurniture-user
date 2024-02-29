import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import useCart from "../../../../hooks/useCart";
import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";

function FurnitureShoppingButton() {
  const { furniture } = useContext(FurnitureCardContext);
  const { addToCart } = useCart();

  return (
    <ShoppingBagIcon
      onClick={() => addToCart(furniture)}
      className="hover:scale-110 border hover:cursor-pointer duration-300 border-black p-2 absolute bottom-4 right-0 h-12 w-12 flex-shrink-0 text-slate-700 group-hover:text-gray-500"
      aria-hidden="true"
    />
  );
}

export default FurnitureShoppingButton;
