import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import FavoriteButton from "../../../FavoriteButton";

import styles from "./FurnitureFavorite.module.css";

function FurnitureFavorite() {
  const { favored, setFavored } = useContext(FurnitureCardContext);

  const handleOnClick = () => {
    setFavored(!favored);
  };

  return (
    <div className={styles.favorite_wrapper}>
      <FavoriteButton onClick={handleOnClick} favored={favored} />
      <div className={styles.tool_tip}>
        {favored ? "Remove from Favorites" : "Add to Favorites"}
      </div>
    </div>
  );
}

export default FurnitureFavorite;
