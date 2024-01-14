import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";

function FurnitureDimensionOption() {
  const { model_state } = useContext(FurnitureCardContext);
  return (
    <section className="absolute w-full left-0 right-0 bottom-2 flex justify-center gap-4">
      {model_state["three_dimension"].change_dimension_button}
      {model_state["two_dimension"].change_dimension_button}
    </section>
  );
}

export default FurnitureDimensionOption;
