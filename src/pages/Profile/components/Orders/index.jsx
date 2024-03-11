import { lazy, useState } from "react";
import AppSuspense from "@components/AppSuspense";
import { ORDER_STATE } from '@constants/orderStateConstants';


const AllOrders = lazy(() => import("../AllOrders"));
const Pending = lazy(() => import("../Pending"));
const Shipping = lazy(() => import("../Shipping"));
const Success = lazy(() => import("../Success"));
const Cancelled = lazy(() => import("../Cancelled"));

const Orders = () => {

  
  const TAB_ORDER = {
    all: {
      title: "All orders",
      component: <AllOrders />,
    },
    pending: {
      title: "Pending",
      component: <Pending />,
    },
    shipping: {
      title: "Shipping",
      component: <Shipping />,
    },
    success: {
      title: "Success",
      component: <Success />,
    },
    cancelled: {
      title: "Cancelled",
      component: <Cancelled />,
    },
  };

  const tabKeys = Object.keys(TAB_ORDER);

  const [currentTab, setCurrentTab] = useState(tabKeys[0]);

  return (
    <section >
      <p className="font-HelveticaBold text-[1.5rem] leading-[1.20833] tracking-[0.08em]">Orders</p>
      <p className="text-[14px] leading-[1.4] tracking-[0.04em] pb-4">View your order history and check the delivery status for your items.</p>
      <div className="flex pt-2 ">
        <div className="relative shadow-sm">
          <div className="flex flex-row justify-center gap-6 bg-white border py-2 rounded-md px-6">
            {tabKeys.map((tabKey) => (
              <div key={tabKey} onClick={() => setCurrentTab(tabKey)} className={`z-10 py-2 px-10 rounded-md duration-500 select-none ${currentTab === tabKey && 'text-white'}`}>
                {TAB_ORDER[tabKey].title}
              </div>
            ))}
          </div>
          <div
            className={`duration-300 w-36 z-[9] h-10 bg-blackPrimary rounded-md absolute top-1/2 -translate-y-1/2 
            ${currentTab === ORDER_STATE.all ? 'left-[18px]'
                : currentTab === ORDER_STATE.pending ? 'left-[22%]'
                  : currentTab === ORDER_STATE.shipping ? 'left-[41%]'
                    : currentTab === ORDER_STATE.success ? 'left-[60%]' : 'left-[79%]'
              }`}
          />
        </div>
      </div>
      <AppSuspense> <div className="fade-in-from-bottom pt-12 max-w-[55.375rem]">{TAB_ORDER[currentTab].component}</div></AppSuspense>
    </section>
  )
}

export default Orders;
