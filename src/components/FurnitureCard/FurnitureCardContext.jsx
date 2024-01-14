import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { MODEL_DIMENSION } from "../../constants/enum";

const FurnitureCardContext = createContext();

function FurnitureCardProvider(props) {
  const { children, furniture } = props;

  const [dimension, setDimension] = useState(MODEL_DIMENSION.two_dimension);

  const value = {
    furniture,
    dimension,
    setDimension,
  };

  return (
    <FurnitureCardContext.Provider {...props} value={value}>
      {children}
    </FurnitureCardContext.Provider>
  );
}

FurnitureCardProvider.propTypes = {
  children: PropTypes.node,
  furniture: PropTypes.object,
};

export { FurnitureCardContext, FurnitureCardProvider };
