import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useFetch } from "../hooks/api-hooks";

export const withFetchData = (WrappedComponent, queryMap, api) => {
  return (props) => {
    const { slug } = props;
    const params = useParams();

    const { get_api } = queryMap.get(api);
    const { data, isLoading } = useFetch(get_api(slug || params));

    if (isLoading) return <LoadingSpinner />;
    return <WrappedComponent {...props} data={data} />;
  };
};
