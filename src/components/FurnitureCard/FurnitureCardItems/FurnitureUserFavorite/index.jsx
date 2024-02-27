import { useContext, useState } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import FavoriteButton from "../../../FavoriteButton";

import styles from "./FurnitureFavorite.module.css";
import {
  useDeleteAuth,
  useFetchWithAuth,
  usePostAuth,
} from "../../../../hooks/api-hooks";
import {
  get_update_wishlist_api,
  get_wishlist_api,
} from "../../../../api/wishlistApi";

function FurnitureUserFavorite() {
  const { furniture } = useContext(FurnitureCardContext);

  const [favored, setFavored] = useState(false);

  const { mutate: onFavored } = usePostAuth(
    get_update_wishlist_api(furniture._id)
  );

  const { mutate: onUnFavored } = useDeleteAuth(
    get_update_wishlist_api(furniture._id)
  );

  const handleFavored = () => {
    setFavored(!favored);

    if (!favored) onFavored();
    if (favored) onUnFavored();
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

export default FurnitureUserFavorite;
