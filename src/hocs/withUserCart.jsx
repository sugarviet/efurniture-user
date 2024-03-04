import useUserCart from "../hooks/useUserCart";

export const withUserCart = (WrappedComponent) => {
  return () => {
    const cart = useUserCart();
    

    return <WrappedComponent cartData={cart}/>;
  };
};
