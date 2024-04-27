import { lazy, useEffect, useState } from "react";
import AppSuspense from "@components/AppSuspense";
import useSwitchTab from "./hooks/useSwitchTab";
import ToggleCheckoutButton from "@components/ToggleCheckoutButton";
import SplashCheckoutProduct from "@components/SplashCheckoutProduct";
import { withGuestCart } from "../../hocs/withGuestCart";
import { withUserCart } from "../../hocs/withUserCart";
import { withBillingGuest } from "../../hocs/withBillingGuest";
import { withBillingUser } from "../../hocs/withBillingUser";
import useAuth from "../../stores/useAuth";
import { useLocation } from "react-router-dom";
import { useFetch, usePost } from "../../hooks/api-hooks";
import { get_furniture_info_api } from "../../api/furnitureApi";

const Billing = lazy(() => import("./components/Billing"));
const Shipping = lazy(() => import("./components/Shipping"));
const Payment = lazy(() => import("./components/Payment"));
const Summary = lazy(() => import("./components/Summary"));
const CheckoutProduct = lazy(() => import("@components/CheckoutProduct"));

const GuestCheckoutProduct = withGuestCart(CheckoutProduct);
const UserCheckoutProduct = withUserCart(CheckoutProduct);

const BillingUser = withBillingUser(Billing);
const BillingGuest = withBillingGuest(Billing);

function Checkout() {
  const { accessToken } = useAuth();

  const { activeTab } = useSwitchTab();

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [purchaseItems, setPurchaseItems] = useState([]);

  const getJsonStringCart = () =>
    JSON.stringify(
      [...JSON.parse(params.get("q"))].map((furniture) => {
        const { _id, select_variation, quantity_in_cart } = furniture;
        return {
          product_id: _id,
          variation: select_variation.map((variation) => {
            const { variation_id, property_id } = variation;
            return {
              variation_id: variation_id,
              property_id: property_id,
            };
          }),
          quantity: quantity_in_cart,
        };
      })
    );

  const { data, isLoading } = useFetch(
    get_furniture_info_api(getJsonStringCart())
  );

  useEffect(() => {
    if (!data || isLoading) return;

    setPurchaseItems(data);
  }, [data, isLoading]);

  const getTotalPrice = () =>
    purchaseItems.reduce((total, cur) => {
      const stock = cur.select_variation[0].stock;
      const quantity = cur.quantity_in_cart > stock ? 0 : cur.quantity_in_cart;
      const subPrice = cur.select_variation.reduce(
        (total, cur) => total + cur.sub_price,
        0
      );
      return total + (cur.sale_price + subPrice) * quantity;
    }, 0);

  const tabsCheckout = {
    billing: {
      component: accessToken ? <BillingUser /> : <BillingGuest />,
    },
    shipping: {
      component: <Shipping />,
    },
    payment: {
      component: <Payment totalPrice={getTotalPrice()} />,
    },
    summary: {
      component: (
        <Summary purchaseItems={purchaseItems} totalPrice={getTotalPrice()} />
      ),
    },
  };

  return (
    <main className="min-h-screen">
      <div className="lg:furniture-divided-bottom pt-0">
        <article className="lg:grid lg:grid-cols-[54.17%_45.83%]">
          <div className="pt-[2.5rem] pb-[8.75rem] hidden lg:block">
            {accessToken ? (
              <UserCheckoutProduct
                purchaseItems={purchaseItems}
                totalPrice={getTotalPrice()}
                activeTab={activeTab}
              />
            ) : (
              <GuestCheckoutProduct
                purchaseItems={purchaseItems}
                totalPrice={getTotalPrice()}
                activeTab={activeTab}
              />
            )}
          </div>
          <div className="furniture-divided-left pt-8 px-5 lg:pt-10 lg:px-16 ">
            <AppSuspense>{tabsCheckout[activeTab].component}</AppSuspense>
            <div className="border-t border-x mb-[-2px] mt-[48px] lg:hidden block">
              <ToggleCheckoutButton />
            </div>
          </div>
        </article>
      </div>
      <SplashCheckoutProduct />
    </main>
  );
}

export default Checkout;
