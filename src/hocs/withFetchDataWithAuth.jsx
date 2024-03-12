/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useParams, useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useFetch, useFetchWithAuth } from "../hooks/api-hooks";

const getAllSearchParams = (searchParams) => {
    const search = {};

    searchParams.forEach((value, key) => {
        search[key] = value;
    });

    return search;
};

export const withFetchDataWithAuth = (WrappedComponent, getApi) => {
    return (props) => {
        const { slug } = props;
        const params = useParams();
        const [searchParams] = useSearchParams();

        const urlParams = getAllSearchParams(searchParams);

        const { data, isLoading } = useFetchWithAuth(getApi(slug || params, urlParams));

        if (isLoading) return <LoadingSpinner />;
        return <WrappedComponent {...props} data={data} />;
    };
};
