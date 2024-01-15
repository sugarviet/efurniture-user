import {
  FurnitureAttribute,
  FurnitureModel,
  FurniturePrice,
} from "./FurnitureCardItems";
import { FurnitureCardProvider } from "./FurnitureCardContext";
import FurnitureDimensionOption from "./FurnitureCardItems/FurnitureDimensionOption";
import FurnitureFavorite from "./FurnitureCardItems/FurnitureFavorite";

function FurnitureCard({ item, children }) {
  return (
    <article className="w-full bg-white pb-[0.5rem]">
      <FurnitureCardProvider furniture={item}>{children}</FurnitureCardProvider>
    </article>
  );
}

FurnitureCard.Model = FurnitureModel;
FurnitureCard.Attribute = FurnitureAttribute;
FurnitureCard.Price = FurniturePrice;
FurnitureCard.DimensionOption = FurnitureDimensionOption;
FurnitureCard.Favorite = FurnitureFavorite;

export default FurnitureCard;
