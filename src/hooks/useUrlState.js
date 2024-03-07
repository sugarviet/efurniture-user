import { useSearchParams } from "react-router-dom";

function useUrlState() {
    const [urlState, setUrlState] = useSearchParams();
    return [urlState, setUrlState];
}

export default useUrlState;