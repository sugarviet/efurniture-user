import useGuestCart from "../hooks/useGuestCart";

export const withGuestCart = (WrappedComponent) => {
  return (props) => {
    const cart = useGuestCart();

    return <WrappedComponent {...props} cartData={cart} />;
  };
};
