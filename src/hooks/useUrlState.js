import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function useUrlState(key) {
    const [params, setParams] = useSearchParams();

    const handleSetUrlState = (value) => {
        setParams({ [key]: value })
    }

    return [params.get(key), handleSetUrlState];
}

export default useUrlState;