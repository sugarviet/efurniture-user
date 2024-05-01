import { useContext } from "react";
import DimensionButton from "../../../DimensionButton";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import { MODEL_DIMENSION } from "../../../../constants/enum";

function FurnitureDimensionOption() {
  const { dimension, setDimension, haveModel3D } =
    useContext(FurnitureCardContext);

  return (
    <section className="flex gap-2 mr-4">
      <DimensionButton
        selected={dimension === MODEL_DIMENSION.two_dimension}
        onClick={() => {
          setDimension(MODEL_DIMENSION.two_dimension);
        }}
        name={MODEL_DIMENSION.two_dimension}
      />
      {haveModel3D && (
        <DimensionButton
          selected={dimension === MODEL_DIMENSION.three_dimension}
          onClick={() => setDimension(MODEL_DIMENSION.three_dimension)}
          name={MODEL_DIMENSION.three_dimension}
        />
      )}
    </section>
  );
}

export default FurnitureDimensionOption;
