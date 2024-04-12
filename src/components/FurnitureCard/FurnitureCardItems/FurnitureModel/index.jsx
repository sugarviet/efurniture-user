import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import RoomleConfiguration3D from "../../../RoomleConfiguration3D";
import { MODEL_DIMENSION } from "../../../../constants/enum";

import { classNames } from "@utils/classNames";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function FurnitureModel({ children, className }) {
  const { furniture, dimension, onSale, salePercentage, outOfStock } =
    useContext(FurnitureCardContext);

  const { model3D, name, thumbs, slug } = furniture;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product-detail/${slug}`)}
      className={classNames(
        `flex items-center justify-center mb-[0.9375rem] w-full hover:cursor-pointer`
      )}
      title={name}
    >
      <div className="relative flex justify-center items-center">
        {dimension === MODEL_DIMENSION.two_dimension && (
          <img
            className={classNames(
              "",
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
          <div className="from-[#961200] to-[#c2560a] bg-gradient-to-l rounded-sm  px-2 py-1 flex items-center justify-center absolute bottom-4 right-0">
            <span className="text-white text-sm">-{salePercentage}%</span>
          </div>
        )}
        
        {outOfStock && (
          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-white opacity-70 flex items-center justify-center">
            <div className="border border-dashed border-black shadow-xl -rotate-45 flex py-1 px-4 items-center justify-center">
              <span className="uppercase text-lg font-bold tracking-widest">
                out of stock
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

FurnitureModel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};

export default FurnitureModel;
