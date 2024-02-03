import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import RoomleConfiguration3D from "../../../RoomleConfiguration3D";
import { MODEL_DIMENSION } from "../../../../constants/enum";

import styles from "../../FurnitureCard.module.css";
import PropTypes from "prop-types";

function FurnitureModel({ children }) {
  const { furniture, dimension, onSale } = useContext(FurnitureCardContext);

  const { url, model_id, name } = furniture;

  return (
    <div
      className={`relative flex items-center mb-[0.9375rem] w-full h-72 hover:cursor-pointer ${styles.dimension_option_parent}`}
      title={name}
    >
      {dimension === MODEL_DIMENSION.two_dimension ? (
        <img className="relative left-[10%] w-[80%] object-cover" src={url} />
      ) : null}

      {dimension === MODEL_DIMENSION.three_dimension ? (
        <RoomleConfiguration3D model_id={model_id} />
      ) : null}
      {children}

      {onSale ? (
        <img
          className="w-10 h-10 absolute bottom-0 right-0"
          src="https://www.boconcept.com/on/demandware.static/-/Library-Sites-BoConceptSharedLibrary/default/dwe05ddb62/images/promotionicons/One%20time%20offer%20icon%20pct-0111.svg"
        />
      ) : null}
    </div>
  );
}
FurnitureModel.propTypes = {
  children: PropTypes.node,
};

export default FurnitureModel;
