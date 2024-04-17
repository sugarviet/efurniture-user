import { useNavigate } from "react-router-dom";
import CartProduct from "@components/CartProduct";
import formattedCurrency from "@utils/formattedCurrency";
import EmptyCart from "./EmptyCart";
import Proptypes from "prop-types";
import usePurchase from "../../../hooks/usePurchase";

const CartContent = ({ cartData }) => {
  const { cart } = cartData;
  const navigate = useNavigate();

  const {
    addToPurchaseItems,
    getTotalPrice,
    isInPurchase,
    removeFromPurchaseItems,
  } = usePurchase();

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div>
      <article className="lg:grid lg:grid-cols-[54.17%_45.83%]">
        <div className="pt-[2.5rem] pb-[8.75rem] hidden lg:block px-8">
          <div>
            <p className="text-3xl font-bold">Your Cart</p>
            <p>{cart.length} item(s)</p>
          </div>

          {cart.map((item) => (
            <CartProduct
              addToPurchaseItems={addToPurchaseItems}
              removeFromPurchaseItems={removeFromPurchaseItems}
              isInPurchase={isInPurchase}
              cartData={cartData}
              key={item.code}
              data={item}
            />
          ))}
        </div>
        <div className="furniture-divided-left pt-8 px-5 lg:pt-10 lg:px-16 flex flex-col gap-5">
          <p className="font-bold text-2xl">Your summary</p>
          <ul className="flex flex-col gap-5">
            <li className="flex justify-between">
              <p>Subtotal</p>
              <p>{formattedCurrency(getTotalPrice())}</p>
            </li>
            <li className="flex justify-between font-bold">
              <p>ORDER TOTAL</p>
              <p>{formattedCurrency(getTotalPrice())}</p>
            </li>
          </ul>

          <hr />
          <div className="flex flex-col gap-2">
            <p className="font-bold">YOUR EXPECTED DELIVERY DATE</p>
            <p>
              At eFurniture we do not have all our products in stock, as most of
              our furniture is made just for you and your home.
            </p>
            <p>Our normal delivery time is</p>

            <div>
              <p>3 - 4 weeks for board furniture</p>
              <p>6 - 7 weeks for upholstery furniture</p>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <button className="furniture-button-black-hover py-3">
                checkout
              </button>
              <button
                className="furniture-button-white-hover py-3"
                onClick={() => navigate(-1)}
              >
                continue shopping
              </button>
            </div>
          </div>

          <div className="border-t border-x mb-[-2px] mt-[48px] lg:hidden block">
            <p>Your summary</p>
          </div>
        </div>
      </article>
    </div>
  );
};

CartContent.propTypes = {
  cartData: Proptypes.object,
};

export default CartContent;
