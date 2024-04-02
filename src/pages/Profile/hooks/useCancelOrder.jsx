import { useUpdateWithAuth } from "@hooks/api-hooks";
import { cancel_order_by_id } from "../../../api/orderHistoryApi";
import { useQueryClient } from "@tanstack/react-query";
import useNotification from "@hooks/useNotification";
import { useState } from "react";

const useCancelOrder = (id) => {
    const queryClient = useQueryClient();
    const { success_message, error_message } = useNotification();

    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    const toggleModalDelete = () => {
        setIsModalDeleteOpen(!isModalDeleteOpen);
    };


    const cancelOrderMutation = useUpdateWithAuth(
        cancel_order_by_id(id),
        undefined,
        () => {
            queryClient.invalidateQueries(get_order_by_state(ORDER_STATE.pending));
            success_message("order", "delete");
        },
        () => {
            error_message("order", "delete");
        }
    );

    const cancelOrder = () => {
        cancelOrderMutation.mutate({});
        setIsModalDeleteOpen(!isModalDeleteOpen);
    };


    return {
        isModalDeleteOpen,
        toggleModalDelete,
        cancelOrder,
    };
};

export default useCancelOrder;
