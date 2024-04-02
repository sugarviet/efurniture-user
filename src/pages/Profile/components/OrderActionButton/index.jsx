import AppModal from "@components/ui/AppModal";
import React from 'react';
import useNavigation from "../../../../hooks/useNavigation";
import useCancelOrder from '../../hooks/useCancelOrder';

const TYPES = {
    Pending:
    {
        name: "Pay again",
        bgColor: 'furniture-button-black-hover',
        action: 'payAgain'
    },
    Processing:
    {
        name: "Cancel Order",
        bgColor: 'furniture-button-black-hover',
        action: 'cancelOrder'
    },
    Done:
    {
        name: "Buy again",
        bgColor: 'furniture-button-black-hover',
        action: 'repurchase'
    },
};

function OrderActionButton({ type, className, data }) {
    const { name, bgColor, action } = TYPES[type];

    const { toggleModalDelete, isModalDeleteOpen, cancelOrder } = useCancelOrder();

    const { go_to_payment } = useNavigation();

    const handleAction = (actionName) => {
        if (actionName === 'payAgain') {
            go_to_payment(data)
        }
        if (actionName === 'cancelOrder') {
            toggleModalDelete();
        }
        if (actionName === 'repurchase') {
            
        }
    };

    return (
        <>
            <section className='flex flex-row justify-end gap-4'>
                <button
                    onClick={() => handleAction(action)}
                    className={`w-full px-[25px] py-[14px] text-[0.6875rem] tracking-[0.125rem] ${bgColor} ${className}`}
                >
                    {name}
                </button>
            </section>
            <AppModal
                className="max-h-[200px] max-w-[700px]"
                isOpen={isModalDeleteOpen}
                onClose={toggleModalDelete}
            >
                <div className="flex flex-col gap-6">
                    <p className="text-xl font-bold text-center">
                        Are you sure that you want to cancel this order?
                    </p>
                    <div className="flex gap-2 ml-auto">
                        <button
                            className="furniture-button-black-hover px-6 py-2.5"
                            onClick={toggleModalDelete}
                        >
                            Cancel
                        </button>
                        <button
                            className="furniture-button-black-hover px-6 py-2.5"
                            onClick={() => cancelOrder({})}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </AppModal>
        </>
    )
}

export default OrderActionButton