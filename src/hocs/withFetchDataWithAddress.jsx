import { get_user_info_detail } from "@api/profileApi";
import { useFetchWithAuth } from "@hooks/api-hooks";
import { get_all_address } from "@api/addressApi";
import LoadingSpinner from "../components/LoadingSpinner";

export const withFetchDataWithAddress = (WrappedComponent) => {
    return () => {

        const { data: addressList, isLoading: isLoadingAddress } = useFetchWithAuth(
            get_all_address()
        );
        const { data: userData, isLoading } = useFetchWithAuth(get_user_info_detail());

        if (isLoading) return <LoadingSpinner />;

        if (isLoadingAddress) return <LoadingSpinner />;
        return <WrappedComponent addressList={addressList} userData={userData} />;
    };
};
