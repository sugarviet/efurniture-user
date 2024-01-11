import { Suspense } from "react";
import Proptypes from "prop-types";

import LoadingSpinner from "../LoadingSpinner";

const AppSuspense = ({ children }) => {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
};

AppSuspense.propTypes = {
  children: Proptypes.node,
};

export default AppSuspense;
