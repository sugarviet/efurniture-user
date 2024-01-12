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
      <CubeButton onClick={() => setDimension("three_dimension")} />
    ),
  };

  const three_dimension = {
    component: <RoomleConfiguration3D model_id={model_id} />,
    change_dimension_button: (
      <ViewFinderCircleButton onClick={() => setDimension("two_dimension")} />
    ),
  };

  const model_state = {
    two_dimension,
    three_dimension,
  };

  return { model_state, dimension };
}

export default useFurnitureCard;
