import { lazy, useState } from "react";
import AppSuspense from "@components/AppSuspense";
import { ORDER_STATE } from "@constants/orderStateConstants";
import OrderHistory from "../OrderHistory";
import { withFetchDataWithHeaders } from "../../../../hocs/withFetchDataWithHeaders";
import { get_order_by_state } from "@api/orderHistoryApi";

const Orders = () => {
  const AllOrders = withFetchDataWithHeaders(OrderHistory, () =>
    get_order_by_state(ORDER_STATE.all)
  );
  const Pending = withFetchDataWithHeaders(OrderHistory, () =>
    get_order_by_state(ORDER_STATE.pending)
  );
  const Processing = withFetchDataWithHeaders(OrderHistory, () =>
    get_order_by_state(ORDER_STATE.processing)
  );
  const Shipping = withFetchDataWithHeaders(OrderHistory, () =>
    get_order_by_state(ORDER_STATE.shipping)
  );
  const Done = withFetchDataWithHeaders(OrderHistory, () =>
    get_order_by_state(ORDER_STATE.done)
  );
  const Cancel = withFetchDataWithHeaders(OrderHistory, () =>
    get_order_by_state(ORDER_STATE.cancelled)
  );
  const Refunded = withFetchDataWithHeaders(OrderHistory, () =>
    get_order_by_state(ORDER_STATE.refunded)
  );

  const TAB_ORDER = {
    all: {
      title: "All",
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
    <section className="w-11/12">
      <p className="font-HelveticaBold text-[1.5rem] leading-[1.20833] tracking-[0.08em]">
        Orders
      </p>
      <p className="text-[14px] leading-[1.4] tracking-[0.04em] pb-4">
        View your order history and check the delivery status for your items.
      </p>
      <div className="flex flex-col pt-5">
        <div className="relative shadow-sm">
          <div className="flex items-center justify-start bg-white border overflow-x-scroll">
            {tabKeys.map((tabKey) => (
              <div
                key={tabKey}
                onClick={() => setCurrentTab(tabKey)}
                className={`z-10 py-4 px-10 duration-300 select-none ${
                  currentTab === tabKey && "text-white bg-black"
                }`}
              >
                <span className="text-lg font-semibold">
                  {TAB_ORDER[tabKey].title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <AppSuspense>
          {" "}
          <div className="fade-in-from-bottom">
            {TAB_ORDER[currentTab].component}
          </div>
        </AppSuspense>
      </div>
    </section>
  );
};

export default Orders;
