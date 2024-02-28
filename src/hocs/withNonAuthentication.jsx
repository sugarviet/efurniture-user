import { useEffect } from "react";
import useAuth from "../stores/useAuth";
import { useNavigate } from "react-router-dom";

function withNonAuthentication(WrappedComponent) {
  return () => {
    const navigate = useNavigate();
    const { accessToken } = useAuth(); 

    useEffect(() => {
      if (!accessToken) return;

      navigate("/");
    }, [accessToken]);

    return <WrappedComponent />;
  };
}

export default withNonAuthentication;
