import { useUpdateWithAuth } from "@hooks/api-hooks";
import { cancel_order_by_id, get_order_by_state } from "../../../api/orderHistoryApi";
import { useQueryClient } from "@tanstack/react-query";
import useNotification from "@hooks/useNotification";
import { useState } from "react";
import { ORDER_STATE } from "../../../constants/orderStateConstants";

const useCancelOrder = (id) => {
    const queryClient = useQueryClient();
    const { error_message, success_message } = useNotification();

    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    const toggleModalDelete = () => {
        setIsModalDeleteOpen(!isModalDeleteOpen);
    };


    const { mutate: cancelOrderMutation } = useUpdateWithAuth(
        cancel_order_by_id(id),
        undefined,
        () => {
            queryClient.invalidateQueries(get_order_by_state(ORDER_STATE.processing));
            queryClient.invalidateQueries(get_order_by_state(ORDER_STATE.all));
            success_message(null, null, "Cancel order successfully");
        },
        (error) => {
            error_message(null, null, error.message);
        }
    );

    const cancelOrder = (note) => {
        cancelOrderMutation(note);
    };


    return {
        isModalDeleteOpen,
        toggleModalDelete,
        cancelOrder,
    };
};

export default useCancelOrder;
