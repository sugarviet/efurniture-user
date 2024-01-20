import { ShoppingBagIcon } from "@heroicons/react/24/outline";

function ShoppingBagButton() {
  return (
    <div className="relative">
      <ShoppingBagIcon
        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        aria-hidden="true"
      />
      <span className="absolute w-4 h-4 flex items-center justify-center text-[.75rem] -bottom-[25%] -right-[25%] rounded-full bg-[#e9dabf]">
        0
      </span>
    </div>
  );
}

export default ShoppingBagButton;
