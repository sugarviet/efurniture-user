import { useNavigate } from "react-router-dom";
import useAuth from "../stores/useAuth";
import { useEffect } from "react";

export const withAuthentication = (WrappedComponent) => {
  return () => {
    const navigate = useNavigate();
    const { accessToken } = useAuth();

    useEffect(() => {
      if (!accessToken) navigate("/login");
    }, [accessToken]);

    return <WrappedComponent />;
  };
};
