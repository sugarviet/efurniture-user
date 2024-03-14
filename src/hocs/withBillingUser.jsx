import { get_user_info_detail } from "@api/profileApi";
import { useFetchWithAuth } from "@hooks/api-hooks";
import LoadingSpinner from "../components/LoadingSpinner";
import useAuth from "../stores/useAuth";

export const withBillingUser = (WrappedComponent) => {
    return () => {
        const { accessToken } = useAuth(); // Lấy accessToken từ hook useAuth

        // Kiểm tra accessToken có tồn tại không
        if (!accessToken) {
            // Nếu không, trả về null hoặc thông báo lỗi, tùy thuộc vào yêu cầu của bạn
            return null; // hoặc return <WrappedComponent userData={null} />;
        }

        // Nếu có accessToken, thì tiến hành fetch dữ liệu
        const { data: userData, isLoading } = useFetchWithAuth(get_user_info_detail());

        if (isLoading) return <LoadingSpinner />;
        return <WrappedComponent userData={userData} />;
    };
};
