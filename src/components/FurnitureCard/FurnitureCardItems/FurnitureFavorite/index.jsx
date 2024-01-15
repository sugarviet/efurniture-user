import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import FavoriteButton from "../../../FavoriteButton";

function FurnitureFavorite() {
  const { favored, setFavored } = useContext(FurnitureCardContext);

  const handleOnClick = () => {
    setFavored(!favored);
  };

  return (
    <div className="absolute top-4 right-4">
      <FavoriteButton onClick={handleOnClick} favored={favored} />
    </div>
  );
}

export default FurnitureFavorite;
