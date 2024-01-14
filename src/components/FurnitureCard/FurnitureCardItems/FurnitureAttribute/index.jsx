import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";

function FurnitureAttribute() {
  const { furniture } = useContext(FurnitureCardContext);

  const { color, name, material } = furniture;

  return (
    <div>
      <div className="pointer-events-none">
        <img className="h-[1.625rem]" src={color} />
      </div>
      <div className="text-xs tracking-[0.9px] text-black mt-[0.75rem]">
        <a href="#">{name}</a>
      </div>
      <div className="text-[0.6875rem] text-grey2 tracking-[0.5px]">
        {material}
      </div>
    </div>
  );
}

export default FurnitureAttribute;
