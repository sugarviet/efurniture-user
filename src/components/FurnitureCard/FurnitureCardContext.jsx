import { createContext, useState } from "react";
import PropTypes from "prop-types";
import useFurnitureModel from "../../hooks/useFurnitureModel";

const FurnitureCardContext = createContext();

function FurnitureCardProvider(props) {
  const { children, furniture } = props;

  const { url, model_id } = furniture;

  const { model_state, dimension } = useFurnitureModel(url, model_id);

  const value = {
    furniture,
    model_state,
    dimension,
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
