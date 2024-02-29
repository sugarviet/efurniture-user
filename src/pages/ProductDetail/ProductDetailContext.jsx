import { createContext } from "react";
import PropTypes from "prop-types";
const FurnitureDetailContext = createContext();

function FurnitureDetailProvider(props) {
  const { children, furniture } = props;

  const value = {
    furniture,
  };

  return (
    <FurnitureDetailContext.Provider {...props} value={value}>
      {children}
    </FurnitureDetailContext.Provider>
  );
}

FurnitureDetailProvider.propTypes = {
  children: PropTypes.node,
  furniture: PropTypes.object,
};

export { FurnitureDetailContext, FurnitureDetailProvider };
