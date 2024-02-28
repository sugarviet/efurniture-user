import { ShoppingBagIcon } from "@heroicons/react/24/outline";

function FurnitureShoppingButton() {
  return (
    <ShoppingBagIcon
      className="hover:scale-110 border hover:cursor-pointer duration-300 border-black p-2 absolute bottom-4 right-0 h-12 w-12 flex-shrink-0 text-slate-700 group-hover:text-gray-500"
      aria-hidden="true"
    />
  );
}

export default FurnitureShoppingButton;
