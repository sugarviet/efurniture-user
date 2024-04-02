import { lazy, useState } from "react";
import AppSuspense from "@components/AppSuspense";
import { ORDER_STATE } from '@constants/orderStateConstants';
import OrderHistory from "../OrderHistory";
import { withFetchDataWithHeaders } from '../../../../hocs/withFetchDataWithHeaders';
import { get_order_by_state } from "@api/orderHistoryApi";


const Orders = () => {

  const AllOrders = withFetchDataWithHeaders(OrderHistory, () => get_order_by_state(ORDER_STATE.all))
  const Pending = withFetchDataWithHeaders(OrderHistory, () => get_order_by_state(ORDER_STATE.pending))
  const Processing = withFetchDataWithHeaders(OrderHistory, () => get_order_by_state(ORDER_STATE.processing))
  const Shipping = withFetchDataWithHeaders(OrderHistory, () => get_order_by_state(ORDER_STATE.shipping))
  const Done = withFetchDataWithHeaders(OrderHistory, () => get_order_by_state(ORDER_STATE.done))
  const Cancel = withFetchDataWithHeaders(OrderHistory, () => get_order_by_state(ORDER_STATE.cancelled))
  const Refunded = withFetchDataWithHeaders(OrderHistory, () => get_order_by_state(ORDER_STATE.refunded))


  const TAB_ORDER = {
    all: {
      title: "All orders",
      component: <AllOrders />,
    },
    pending: {
      title: "Pending",
      component: <Pending />,
    },
    processing: {
      title: "Processing",
      component: <Processing />,
    },
    shipping: {
      title: "Shipping",
      component: <Shipping />,
    },
    done: {
      title: "Done",
      component: <Done />,
    },
    cancelled: {
      title: "Cancel",
      component: <Cancel />,
    },
    refunded: {
      title: "Refunded",
      component: <Refunded />,
    },
  };

  const tabKeys = Object.keys(TAB_ORDER);

  const [currentTab, setCurrentTab] = useState(tabKeys[0]);

  return (
    <section >
      <p className="font-HelveticaBold text-[1.5rem] leading-[1.20833] tracking-[0.08em]">Orders</p>
      <p className="text-[14px] leading-[1.4] tracking-[0.04em] pb-4">View your order history and check the delivery status for your items.</p>
      <div className="flex flex-row pt-5 gap-12">
        <div className="relative shadow-sm max-h-[445px]">
          <div className="flex flex-col items-center gap-6 bg-white border py-5 rounded-md px-6">
            {tabKeys.map((tabKey) => (
              <div key={tabKey} onClick={() => setCurrentTab(tabKey)} className={` z-10 py-2 px-10 rounded-md duration-500 select-none ${currentTab === tabKey && 'text-white'}`}>
                {TAB_ORDER[tabKey].title}
              </div>
            ))}
          </div>
          <div
            className={`duration-300 w-36 z-[9] h-10 bg-blackPrimary rounded-md absolute left-1/2 -translate-x-1/2 
            ${currentTab === ORDER_STATE.all ? 'top-[20px]'
                : currentTab === ORDER_STATE.pending ? 'top-[18.2%]'
                  : currentTab === ORDER_STATE.processing ? 'top-[32.1%]'
                    : currentTab === ORDER_STATE.shipping ? 'top-[46%]'
                      : currentTab === ORDER_STATE.done ? 'top-[59.4%]'
                        : currentTab === ORDER_STATE.cancelled ? 'top-[73.4%]'
                          : currentTab === ORDER_STATE.refunded && 'top-[87%]'
              }`}
          />
        </div>
        <AppSuspense> <div className="fade-in-from-bottom max-w-[55.375rem]">{TAB_ORDER[currentTab].component}</div></AppSuspense>
      </div>

    </section>
  )
}

export default Orders;
