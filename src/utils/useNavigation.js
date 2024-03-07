import { useNavigate } from "react-router-dom";

function useNavigation() {
    const navigate = useNavigate();

    const go_to_payment = (orderDetail) => navigate("/payment", { state: orderDetail });

    const go_to_order_confirmation = (orderConfirmation) => navigate("/order-confirmation", { state: orderConfirmation });

    const go_to_home = () => navigate("/");

    return {
        go_to_payment,
        go_to_home,
        go_to_order_confirmation
    };
}

export default useNavigation;
