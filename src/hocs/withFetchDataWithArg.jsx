import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useFetchWithAuth } from "../hooks/api-hooks";

export const withFetchDataWithArg = (WrappedComponent, getApi) => {
  return (props) => {
    const { slug } = props;
    const params = useParams();

    const { data, isLoading } = useFetchWithAuth(getApi(slug || params));

    if (isLoading) return <LoadingSpinner />;
    return <WrappedComponent {...props} data={data} />;
  };
};
