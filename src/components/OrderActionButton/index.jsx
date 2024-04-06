import AppModal from "@components/ui/AppModal";
import React from "react";
import useNavigation from "../../hooks/useNavigation";
import useCancelOrder from "../../pages/Profile/hooks/useCancelOrder";
import OrderCancelForm from "../OrderCancelForm";

const TYPES = {
  Pending: {
    name: "Pay again",
    bgColor: "furniture-button-black-hover",
    action: "payAgain",
  },
  Processing: {
    name: "Cancel Order",
    bgColor: "furniture-button-black-hover",
    action: "cancelOrder",
  },
  Shipping: {
    name: "View details",
    bgColor: "furniture-button-black-hover",
    action: "viewDetail",
  },
  Cancelled: {
    name: "View details",
    bgColor: "furniture-button-black-hover",
    action: "viewDetail",
  },
  Done: {
    name: "Buy again",
    bgColor: "furniture-button-black-hover",
    action: "repurchase",
  },
};

function OrderActionButton({ type, className, data }) {
  const { name, bgColor, action } = TYPES[type];

  const { toggleModalDelete, isModalDeleteOpen } = useCancelOrder();

  const { go_to_payment, go_to_order_detail } = useNavigation();

  const handleAction = (actionName) => {
    if (actionName === "payAgain") {
      go_to_payment(data);
    }
    if (actionName === "cancelOrder") {
      toggleModalDelete();
    }
    if (actionName === "viewDetail") {
      go_to_order_detail(data._id);
    }
  };

  return (
    <>
      <section className="flex flex-row justify-end gap-4">
        <button
          onClick={() => handleAction(action)}
          className={`w-full px-[25px] py-[14px] text-[0.6875rem] tracking-[0.125rem] ${bgColor} ${className}`}
        >
          {name}
        </button>
      </section>
      <AppModal
        className=" max-w-[700px] relative -z-50"
        isOpen={isModalDeleteOpen}
        onClose={toggleModalDelete}
        disableClickOutside
      >
        <div className="flex flex-col gap-6">
          <OrderCancelForm
            isModalDeleteOpen={isModalDeleteOpen}
            toggleModalDelete={toggleModalDelete}
            data={data}
          />
        </div>
      </AppModal>
    </>
  );
}

export default OrderActionButton;
