import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import RoomleConfiguration3D from "../../../RoomleConfiguration3D";
import { MODEL_DIMENSION } from "../../../../constants/enum";

import { classNames } from "@utils/classNames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FurnitureModel({ children, className }) {
  const { furniture, dimension, onSale } = useContext(FurnitureCardContext);

  const { model_id, name, thumb, slug } = furniture;

  return (
    <Link
      to={`/product-detail/${slug}`}
      className={`relative flex items-center mb-[0.9375rem] w-full h-72 hover:cursor-pointer`}
      title={name}
    >
      {dimension === MODEL_DIMENSION.two_dimension && (
        <img
          className={classNames(
            "relative left-1/2 -translate-x-1/2 object-cover ",
            className
          )}
          src={thumb}
        />
      )}

      {dimension === MODEL_DIMENSION.three_dimension && (
        <RoomleConfiguration3D model_id={model_id} />
      )}

      {children}

      {onSale && (
        <img
          className="w-10 h-10 absolute bottom-0 right-2"
          src="https://www.boconcept.com/on/demandware.static/-/Library-Sites-BoConceptSharedLibrary/default/dwe05ddb62/images/promotionicons/One%20time%20offer%20icon%20pct-0111.svg"
        />
      )}
    </Link>
  );
}
FurnitureModel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};

export default FurnitureModel;
