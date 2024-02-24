/* eslint-disable react/display-name */
export const withAuthentication = (WrappedComponent) => {
  return () => {
    console.log("Hi");
    return <WrappedComponent />;
  };
};
