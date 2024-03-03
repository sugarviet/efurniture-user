import { useEffect, useState } from "react";
import { get_user_info_detail } from "@api/profileApi";
import { useFetchWithAuth } from "@hooks/api-hooks";

function useUserProfile() {
    const [userData, setUserData] = useState(null);
    const { data, isLoading } = useFetchWithAuth(get_user_info_detail());

    useEffect(() => {
        if (!isLoading && data) {
            setUserData(data);
        }
    }, [data, isLoading])

    return { userData };
}


export default useUserProfile;