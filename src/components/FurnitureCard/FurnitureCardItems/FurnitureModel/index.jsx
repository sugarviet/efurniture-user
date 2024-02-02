import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import RoomleConfiguration3D from "../../../RoomleConfiguration3D";
import { MODEL_DIMENSION } from "../../../../constants/enum";

import styles from "../../FurnitureCard.module.css";
import { classNames } from "@utils/classNames";
import PropTypes from "prop-types";

function FurnitureModel({ children, className }) {
  const { furniture, dimension } = useContext(FurnitureCardContext);

  const { url, model_id, name } = furniture;

  return (
    <div
      className={`relative flex items-center mb-[0.9375rem] w-full h-72 hover:cursor-pointer ${styles.dimension_option_parent}`}
      title={name}
    >
      {dimension === MODEL_DIMENSION.two_dimension ? (
        <img className={classNames("relative left-1/2 -translate-x-1/2 object-cover ", className)} src={url} />
      ) : null}

      {dimension === MODEL_DIMENSION.three_dimension ? (
        <RoomleConfiguration3D model_id={model_id} />
      ) : null}
      {children}
    </div>
  );
}
FurnitureModel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};

export default FurnitureModel;
