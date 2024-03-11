import { useNavigate } from "react-router-dom";

function useNavigation() {
    const navigate = useNavigate();

    const go_to_payment = (orderDetail) => navigate("/payment", { state: orderDetail });

    const go_to_order_confirmation = (orderConfirmation) => navigate("/order-confirmation", { state: orderConfirmation });

    const go_to_home = () => navigate("/");

    const go_to_order_detail = (id) => navigate(`${id}`);

    const go_to_profile_tab = (tab) => navigate(`/profile/${tab}`);

    const go_to_back = () => navigate(-1);

    return {
        go_to_payment,
        go_to_home,
        go_to_order_confirmation,
        go_to_order_detail,
        go_to_profile_tab,
        go_to_back
    };
}

export default useNavigation;
