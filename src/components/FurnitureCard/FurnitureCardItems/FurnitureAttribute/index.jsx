import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import FurnitureDimensionOption from "../FurnitureDimensionOption";
import FurnitureRating from "../FurnitureRating";

function FurnitureAttribute() {
  const { furniture } = useContext(FurnitureCardContext);

  const { name, variation } = furniture;

  return (
    <div>
      <div className="flex justify-between items-center">
        <FurnitureDimensionOption />
        <FurnitureRating />
      </div>
      <div className="text-xs tracking-[0.9px] text-black mt-[0.75rem]">
        <a href="#">{name}</a>
      </div>
    </div>
  );
}

export default FurnitureAttribute;
