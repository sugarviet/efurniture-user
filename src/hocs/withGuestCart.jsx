import { useNavigate } from "react-router-dom";
import useAuth from "../stores/useAuth";
import { useEffect } from "react";
import useGuestCart from "../hooks/useGuestCart";

export const withGuestCart = (WrappedComponent) => {
  return () => {
    const cart = useGuestCart();

    return <WrappedComponent cartData={cart} />;
  };
};
