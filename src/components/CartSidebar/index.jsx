import { Link } from "react-router-dom";
import formattedCurrency from "../../utils/formattedCurrency";
import SideBar from "../SideBar";
import CartProduct from "@components/CartProduct";
import LoadingSpinner from "../LoadingSpinner";
import Proptypes from "prop-types";
import useCartStore from "@stores/useCartStore";

export default function CartSideBar({ cartData }) {

  const { cart, getTotalPrice, isLoading } = cartData;

  const { closeCart } = useCartStore();

  if (isLoading) return <LoadingSpinner />;
  const isCartEmpty = !cart.length;

  return (
    <SideBar>
      <section className="h-full flex flex-col">
        <header className="text-base font-HelveticaBold tracking-[0.08rem] leading-[1.2142857143] mb-8 pt-8 px-12">
          SHOPPING CART
          <span className="text-grey3"> ({cart.length})</span>
        </header>

        <main className="h-0 flex-grow">
          <div className="pt-0 pb-9 px-12 h-full overflow-y-scroll">
            {cart && cart?.length > 0 ? (
              cart.map((item) => (
                <CartProduct cartData={cartData} key={item._id} data={item} />
              ))
            ) : (
              <p>Your shopping cart is empty</p>
            )}
          </div>
        </main>

        <footer className="bg-[#f1f1f1] px-12 pt-4">
          <section className="m-auto max-w-[34.375rem]">
            {isCartEmpty ? null : (
              <div>
                <div className="grid grid-cols-[1fr_1fr]">
                  <span className="text-center">Subtotal</span>
                  <span className="text-center">
                    {formattedCurrency(getTotalPrice())}
                  </span>
                </div>
                <div className="grid grid-cols-[1fr_1fr]">
                  <span className="text-center">Order total</span>
                  <span className="text-center">
                    {formattedCurrency(getTotalPrice())}
                  </span>
                </div>
              </div>
            )}

            <nav className="flex flex-col items-center gap-7 border-t-[0.0625rem] border-border my-4 pt-4 text-center">
              <a
                className="underline text-[0.8125rem] hover:no-underline"
                href="/cart"
              >
                View Cart
              </a>
              <Link
                to={"/checkout"}
                onClick={closeCart}
                className="font-HelveticaBold furniture-button-black-hover text-[11px] max-w-[17.1875rem] py-[18px] px-[55px] tracking-[0.125rem]"
              >
                CHECKOUT
              </Link>
            </nav>
          </section>
        </footer>
      </section>
    </SideBar>
  );
}

CartSideBar.propTypes = {
  cartData: Proptypes.object,
};
