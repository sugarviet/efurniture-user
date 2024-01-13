import { useState } from "react";
import RoomleConfiguration3D from "../RoomleConfiguration3D";
import { CubeButton, ViewFinderCircleButton } from "../SymbolButton";

function useFurnitureCard(item) {
  const [dimension, setDimension] = useState("two_dimension");

  const { url, model_id } = item;

  const two_dimension = {
    component: (
      <img className="relative left-[10%] w-[80%] object-cover " src={url} />
    ),
    change_dimension_button: (
      <button
        onClick={() => setDimension("three_dimension")}
        className="w-6 h-6 text-sm border-[1px] border-black flex items-center justify-center rounded-full"
      >
        3D
      </button>
    ),
  };

  const three_dimension = {
    component: <RoomleConfiguration3D model_id={model_id} />,
    change_dimension_button: (
      <button
        onClick={() => setDimension("two_dimension")}
        className="w-6 h-6 text-sm border-[1px] border-black flex items-center justify-center rounded-full"
      >
        2D
      </button>
    ),
  };

  const model_state = {
    two_dimension,
    three_dimension,
  };

  return { model_state, dimension };
}

export default useFurnitureCard;
