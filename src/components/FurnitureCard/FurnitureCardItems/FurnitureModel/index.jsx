import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import RoomleConfiguration3D from "../../../RoomleConfiguration3D";
import { MODEL_DIMENSION } from "../../../../constants/enum";

import { classNames } from "@utils/classNames";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function FurnitureModel({ children, className }) {
  const { furniture, dimension, onSale } = useContext(FurnitureCardContext);

  const { model3D, name, thumbs, slug } = furniture;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product-detail/${slug}`)}
      className={`relative flex items-center mb-[0.9375rem] w-full h-72 hover:cursor-pointer`}
      title={name}
    >
      {dimension === MODEL_DIMENSION.two_dimension && (
        <img
          className={classNames(
            "relative left-1/2 -translate-x-1/2 object-cover ",
            className
          )}
          src={thumbs[0]}
        />
      )}

      {dimension === MODEL_DIMENSION.three_dimension && (
        <RoomleConfiguration3D model_id={model3D} />
      )}

      {children}

      {onSale && (
        <img
          className="w-10 h-10 absolute bottom-0 right-2"
          src="/images/discount.png"
        />
      )}
    </div>
  );
}

FurnitureModel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};

export default FurnitureModel;
