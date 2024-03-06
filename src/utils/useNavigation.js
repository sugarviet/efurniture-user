import { useNavigate } from "react-router-dom";

function useNavigation() {
    const navigate = useNavigate();

    const go_to_payment = (orderDetail) => navigate("/payment", { state: orderDetail });

    const go_to_home = () => navigate("/");

    return {
        go_to_payment,
        go_to_home
    };
}

export default useNavigation;
