import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { MODEL_DIMENSION } from "../../constants/enum";

const FurnitureCardContext = createContext();
function FurnitureCardProvider(props) {
  const { children, furniture } = props;
  const { regular_price, sale_price, stock, model3D } = furniture;

  const [dimension, setDimension] = useState(MODEL_DIMENSION.two_dimension);

  const haveModel3D = model3D.trim().length > 0;
  const onSale = regular_price - sale_price > 0;
  const outOfStock = !(stock > 0);
  const salePercentage = (
    ((regular_price - sale_price) / regular_price) *
    100
  ).toFixed(1);

  const value = {
    haveModel3D,
    salePercentage,
    outOfStock,
    furniture,
    dimension,
    setDimension,
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
