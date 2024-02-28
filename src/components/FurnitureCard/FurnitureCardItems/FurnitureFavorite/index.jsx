import { useContext, useState } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import FavoriteButton from "../../../FavoriteButton";

import styles from "./FurnitureFavorite.module.css";
import { useGuestStore } from "../../../../stores/useGuestStore";

function FurnitureFavorite() {
  const { furniture } = useContext(FurnitureCardContext);
  const { wishlist, onFavored, onUnFavored } = useGuestStore();

  const [favored, setFavored] = useState(
    wishlist.some((item) => item._id === furniture._id)
  );

  const handleFavored = () => {
    setFavored(!favored);

    if (!favored) onFavored(furniture);
    if (favored) onUnFavored(furniture._id);
  };

  return (
    <div className={styles.favorite_wrapper}>
      <FavoriteButton onClick={handleFavored} favored={favored} />
      <div className={styles.tool_tip}>
        {favored ? "Remove from Favorites" : "Add to Favorites"}
      </div>
    </div>
  );
}

export default FurnitureFavorite;
