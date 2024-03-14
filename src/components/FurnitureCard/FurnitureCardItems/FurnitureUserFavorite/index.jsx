import { useContext, useEffect, useState } from "react";
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
import useNotification from "../../../../hooks/useNotification";

function FurnitureUserFavorite() {
  const { furniture } = useContext(FurnitureCardContext);
  const { error_message, success_message } = useNotification();

  const [favored, setFavored] = useState(false);

  const { data, isLoading } = useFetchWithAuth(get_wishlist_api());

  const { mutate: onFavored } = usePostAuth(
    get_update_wishlist_api(furniture._id),
    null,
    () => {
      success_message(null, null, `Added ${furniture.name} to Favorites`);
    },
    (error) => {
      error_message(null, null, error.message);
    }
  );

  const { mutate: onUnFavored } = useDeleteAuth(
    get_update_wishlist_api(furniture._id)
  );

  const handleFavored = () => {
    setFavored(!favored);

    if (!favored) onFavored();
    if (favored) onUnFavored();
  };

  useEffect(() => {
    if (isLoading || !data) return;

    const isFavored = data.some((item) => item._id === furniture._id);
    setFavored(isFavored);
  }, [data, isLoading]);

  if (isLoading) return null;

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
