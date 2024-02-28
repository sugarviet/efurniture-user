import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import FurnitureDimensionOption from "../FurnitureDimensionOption";

function FurnitureAttribute() {
  const { furniture } = useContext(FurnitureCardContext);

  const { name, variation } = furniture;

  return (
    <div>
      <FurnitureDimensionOption />
      <div className="text-xs tracking-[0.9px] text-black mt-[0.75rem]">
        <a href="#">{name}</a>
      </div>
      <div className="text-[0.6875rem] text-grey2 tracking-[0.5px]">
        {/* {variation[0].material} */}
      </div>
    </div>
  );
}

export default FurnitureAttribute;
