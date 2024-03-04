import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import useCartStore from "../../stores/useCartStore";
import Proptypes from "prop-types";

function ShoppingBagButton({cartData}) {
  const { toggleCart } = useCartStore();
  return (
    <div className="relative">
      <ShoppingBagIcon
        onClick={toggleCart}
        className="h-6 w-6 flex-shrink-0 hover:cursor-pointer text-gray-400 group-hover:text-gray-500"
        aria-hidden="true"
      />
      <span className="absolute w-4 h-4 flex items-center justify-center text-[.75rem] -bottom-[25%] -right-[25%] rounded-full bg-[#e9dabf]">
        {cartData.cart.length}
      </span>
    </div>
  );
}

ShoppingBagButton.propTypes = {
  cartData: Proptypes.object,
};

export default ShoppingBagButton;
