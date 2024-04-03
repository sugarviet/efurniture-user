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
        <div className="flex items-center">
          <span className="text-xl">+</span>
          <ul className="flex items-center">
            {variation[0].properties.map((property, index) => {
              const { value } = property;
              return (
                <li
                  style={{
                    backgroundColor: value,
                    transform: `translateX(-${0.8 * index}rem)`,
                  }}
                  key={index}
                  className={`w-7 h-7 rounded-full`}
                ></li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FurnitureAttribute;
