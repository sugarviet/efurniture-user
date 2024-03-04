import {
  FurnitureAttribute,
  FurnitureModel,
  FurniturePrice,
  FurnitureDetail,
} from "./FurnitureCardItems";
import { FurnitureCardProvider } from "./FurnitureCardContext";
import FurnitureDimensionOption from "./FurnitureCardItems/FurnitureDimensionOption";
import FurnitureFavorite from "./FurnitureCardItems/FurnitureFavorite";
import FurnitureQuantityOption from "./FurnitureCardItems/FurnitureQuantityOption";
import FurnitureUserFavorite from "./FurnitureCardItems/FurnitureUserFavorite";
import FurnitureShoppingButton from "./FurnitureCardItems/FurnitureShoppingButton";
import { withGuestCart } from "../../hocs/withGuestCart";
import { withUserCart } from "../../hocs/withUserCart";

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
FurnitureCard.UserFavorite = FurnitureUserFavorite;
FurnitureCard.Detail = FurnitureDetail;
FurnitureCard.QuantityOption = FurnitureQuantityOption;
FurnitureCard.GuestShoppingButton = withGuestCart(FurnitureShoppingButton);
FurnitureCard.UserShoppingButton = withUserCart(FurnitureShoppingButton);

export default FurnitureCard;
