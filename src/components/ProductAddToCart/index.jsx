import FavoriteButton from "@components/FavoriteButton";
import { useContext, useEffect, useState } from "react";
import { useGuestStore } from "../../stores/useGuestStore";
import useGuestCart from "../../hooks/useGuestCart";
import useUserCart from "../../hooks/useUserCart";
import useNavigation from "../../hooks/useNavigation";
import useAuth from "../../stores/useAuth";
import {
  useDeleteAuth,
  useFetchWithAuth,
  usePostAuth,
} from "../../hooks/api-hooks";
import {
  get_update_wishlist_api,
  get_wishlist_api,
} from "../../api/wishlistApi";
import useNotification from "../../hooks/useNotification";
import { ProductDetailContext } from "../../pages/ProductDetail/ProductDetailContext";
import { classNames } from "../../utils/classNames";

function ProductAddToCart() {
  const { go_to_store } = useNavigation();
  const { furniture } = useContext(ProductDetailContext);
  const { _id, name, select_variation } = furniture;
  const disablePurchase = select_variation[0].stock <= 0;

  const { accessToken } = useAuth();
  const { success_message, error_message } = useNotification();

  const { data, isLoading } = useFetchWithAuth(get_wishlist_api(), undefined, {
    enabled: !!accessToken,
  });

  const { mutate: onFavoredWithUser } = usePostAuth(
    get_update_wishlist_api(_id),
    null,
    () => {
      success_message(null, null, `Added ${name} to Favorites`);
    },
    (error) => {
      error_message(null, null, error.message);
    }
  );

  const { mutate: onUnFavoredWithUser } = useDeleteAuth(
    get_update_wishlist_api(_id)
  );

  const { wishlist, onFavored, onUnFavored } = useGuestStore();
  const { addToCart: addToCartWithGuest } = useGuestCart();
  const { addToCart: addToCartWithUser } = useUserCart();

  const [isFavored, setIsFavored] = useState(
    wishlist.some((item) => item._id === _id)
  );

  const handleOnFavored = () => {
    setIsFavored(!isFavored);

    if (!isFavored) {
      if (accessToken) onFavoredWithUser(furniture);
      if (!accessToken) onFavored(furniture);
    }
    if (isFavored) {
      if (accessToken) onUnFavoredWithUser(furniture);
      if (!accessToken) onUnFavored(_id);
    }
  };

  const handleAddToCart = () => {
    if (accessToken) addToCartWithUser(furniture);
    if (!accessToken) addToCartWithGuest(furniture);
  };

  useEffect(() => {
    if (!accessToken || isLoading || !data) return;

    const isFavored = data.some((item) => item._id === _id);
    setIsFavored(isFavored);
  }, [data, isLoading]);

  return (
    <section className="flex flex-col justify-center items-center mt-8 w-full">
      <div className="flex gap-2 flex-col w-full">
        <div className="flex gap-2">
          <div className="border px-4 py-3 border-black">
            <FavoriteButton onClick={handleOnFavored} favored={isFavored} />
          </div>

          <button
            disabled={disablePurchase}
            onClick={handleAddToCart}
            className={classNames(
              disablePurchase && "opacity-20 hover:cursor-not-allowed",
              "furniture-button-black-hover w-full py-3 text-[11px]"
            )}
          >
            Add to cart
          </button>
        </div>
        <button
          onClick={go_to_store}
          className="uppercase furniture-button-white-hover w-full py-4 text-[11px]"
        >
          Find store
        </button>
      </div>
    </section>
  );
}

export default ProductAddToCart;
