import useUserCart from "../hooks/useUserCart";

export const withUserCart = (WrappedComponent) => {
  return (props) => {
    const cart = useUserCart();

    return <WrappedComponent {...props} cartData={cart} />;
  };
};
