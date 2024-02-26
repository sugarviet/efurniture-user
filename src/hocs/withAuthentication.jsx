import { useNavigate } from "react-router-dom";
import useAuth from "../stores/useAuth";
import { useEffect } from "react";

/* eslint-disable react/display-name */
export const withAuthentication = (WrappedComponent) => {
  return () => {
    const navigate = useNavigate();
    const { accessToken } = useAuth();
    useEffect(() => {
      if (!accessToken) return navigate("/login");
    }, []);
    return <WrappedComponent />;
  };
};
