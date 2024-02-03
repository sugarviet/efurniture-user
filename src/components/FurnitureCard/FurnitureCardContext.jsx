import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { MODEL_DIMENSION } from "../../constants/enum";

const FurnitureCardContext = createContext();

function FurnitureCardProvider(props) {
  const { children, furniture } = props;

  const [dimension, setDimension] = useState(MODEL_DIMENSION.two_dimension);
  const [favored, setFavored] = useState(false);

  const onSale = Math.floor(Math.random() * 10) % 2 == 0;

  const value = {
    furniture,
    dimension,
    setDimension,
    favored,
    setFavored,
    onSale,
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
