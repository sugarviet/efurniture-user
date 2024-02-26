import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import FavoriteButton from "../../../FavoriteButton";

import styles from "./FurnitureFavorite.module.css";

function FurnitureFavorite() {
  const { favored, onFavored } = useContext(FurnitureCardContext);

  return (
    <div className={styles.favorite_wrapper}>
      <FavoriteButton onClick={onFavored} favored={favored} />
      <div className={styles.tool_tip}>
        {favored ? "Remove from Favorites" : "Add to Favorites"}
      </div>
    </div>
  );
}

export default FurnitureFavorite;
