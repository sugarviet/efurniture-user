import { get_user_info_detail } from "@api/profileApi";
import { useFetchWithAuth } from "@hooks/api-hooks";
import LoadingSpinner from "../components/LoadingSpinner";

export const withBillingUser = (WrappedComponent) => {
    return () => {
     
        const { data: userData, isLoading } = useFetchWithAuth(get_user_info_detail());

        if (isLoading) return <LoadingSpinner />;
        return <WrappedComponent userData={userData} />;
    };
};
