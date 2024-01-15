import { useContext } from "react";
import DimensionButton from "../../../DimensionButton";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import { MODEL_DIMENSION } from "../../../../constants/enum";

import styles from "../../FurnitureCard.module.css";

function FurnitureDimensionOption() {
  const { dimension, setDimension } = useContext(FurnitureCardContext);

  return (
    <section className={`${styles.dimension_option_wrapper}`}>
      <DimensionButton
        selected={dimension === MODEL_DIMENSION.two_dimension}
        onClick={() => setDimension(MODEL_DIMENSION.two_dimension)}
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
