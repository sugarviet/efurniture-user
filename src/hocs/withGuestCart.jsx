import { useNavigate } from "react-router-dom";
import useAuth from "../stores/useAuth";
import { useEffect } from "react";
import useCart from "../hooks/useCart";

export const withGuestCart = (WrappedComponent) => {
  return () => {
    const cart = useCart();
    

    return <WrappedComponent cartData={cart}/>;
  };
};
