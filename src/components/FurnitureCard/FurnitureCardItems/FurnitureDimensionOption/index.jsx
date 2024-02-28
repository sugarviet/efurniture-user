import { useContext } from "react";
import DimensionButton from "../../../DimensionButton";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import { MODEL_DIMENSION } from "../../../../constants/enum";

function FurnitureDimensionOption() {
  const { dimension, setDimension } = useContext(FurnitureCardContext);

  return (
    <section className="flex gap-2">
      <DimensionButton
        selected={dimension === MODEL_DIMENSION.two_dimension}
        onClick={() => {
          console.log("haha");
          setDimension(MODEL_DIMENSION.two_dimension);
        }}
        name={MODEL_DIMENSION.two_dimension}
      />
      <DimensionButton
        selected={dimension === MODEL_DIMENSION.three_dimension}
        onClick={() => setDimension(MODEL_DIMENSION.three_dimension)}
        name={MODEL_DIMENSION.three_dimension}
      />
    </section>
  );
}

export default FurnitureDimensionOption;
