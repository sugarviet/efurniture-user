import useGuestCart from "../hooks/useGuestCart";

export const withGuestCart = (WrappedComponent) => {
  return () => {
    const cart = useGuestCart();

    return <WrappedComponent cartData={cart} />;
  };
};
