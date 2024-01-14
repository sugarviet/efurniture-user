import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";

function FurnitureModel({ children }) {
  const { model_state, dimension } = useContext(FurnitureCardContext);

  return (
    <div className="relative flex items-center mb-[0.9375rem] w-full h-72">
      {model_state[dimension].component}
      {children}
    </div>
  );
}

export default FurnitureModel;
