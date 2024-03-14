import { lazy } from "react";
import AppSuspense from "@components/AppSuspense";
import useSwitchTab from "./hooks/useSwitchTab";
import ToggleCheckoutButton from "@components/ToggleCheckoutButton";
import SplashCheckoutProduct from "@components/SplashCheckoutProduct";
import { withGuestCart } from "../../hocs/withGuestCart";
import { withUserCart } from "../../hocs/withUserCart"
import { withBillingGuest } from "../../hocs/withBillingGuest"
import { withBillingUser } from "../../hocs/withBillingUser"
import useAuth from "../../stores/useAuth";

const Billing = lazy(() => import("./components/Billing"));
const Shipping = lazy(() => import("./components/Shipping"));
const Payment = lazy(() => import("./components/Payment"));
const Summary = lazy(() => import("./components/Summary"));
const CheckoutProduct = lazy(() => import("@components/CheckoutProduct"));

const GuestCheckoutProduct = withGuestCart(CheckoutProduct)
const UserCheckoutProduct = withUserCart(CheckoutProduct)

const BillingUser = withBillingUser(Billing)
const BillingGuest = withBillingGuest(Billing)


function Checkout() {

  const { accessToken } = useAuth();

  const tabsCheckout = {
    billing: {
      component: accessToken ? <BillingUser /> : <BillingGuest />,
    },
    shipping: {
      component: <Shipping />,
    },
    payment: {
      component: <Payment />,
    },
    summary: {
      component: <Summary />,
    },
  };

  const { activeTab } = useSwitchTab();

  return (
    <main className="min-h-screen">
      <div className="lg:furniture-divided-bottom pt-0">
        <article className="lg:grid lg:grid-cols-[54.17%_45.83%]">
          <div className="pt-[2.5rem] pb-[8.75rem] hidden lg:block">
            {accessToken ? <UserCheckoutProduct activeTab={activeTab} /> : <GuestCheckoutProduct activeTab={activeTab} />}
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
  )
}

export default Checkout