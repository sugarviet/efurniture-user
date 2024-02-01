import { lazy } from "react";
import AppSuspense from "@components/AppSuspense";
import useSwitchTab from "@hooks/useSwitchTab"
import ToggleCheckoutButton from "@components/ToggleCheckoutButton";
import { useState, useEffect } from "react";

const Billing = lazy(() => import("./components/Billing"));
const Shipping = lazy(() => import("./components/Shipping"));
const Payment = lazy(() => import("./components/Payment"));
const Summary = lazy(() => import("./components/Summary"));
const CheckoutProduct = lazy(() => import("@components/CheckoutProduct"));

const tabsCheckout = {
  billing: {
    component: <Billing />,
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
function Checkout() {

  const { activeTab } = useSwitchTab();

  const [splashCheckout, setSplashCheckout] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSplashCheckout(false);
      } else {
        setSplashCheckout(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <div className="lg:furniture-divided-bottom pt-0">
        <article className="lg:grid lg:grid-cols-[54.17%_45.83%]">
          <div className="pt-[2.5rem] pb-[8.75rem] hidden lg:block">
            <CheckoutProduct activeTab={activeTab}/>
          </div>
          <div className="furniture-divided-left pt-8 px-5 lg:pt-10 lg:px-16 ">
            <AppSuspense>{tabsCheckout[activeTab].component}</AppSuspense>
            <div className="border-t border-x mb-[-2px] mt-[48px] lg:hidden block">
              <ToggleCheckoutButton />
            </div>
          </div>
        </article>
      </div>
      <div className={`w-full fixed bottom-0 lg:bottom-[-100%] bg-white h-[calc(90%_-_1.5rem)]  overflow-hidden z-[7777]  ${!splashCheckout && "bottom-[-100%] duration-500"}`}>
        <CheckoutProduct />
      </div>
    </main>
  )
}

export default Checkout