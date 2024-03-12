import FavoriteButton from "@components/FavoriteButton";
import { useState } from "react";
import { useGuestStore } from "../../stores/useGuestStore";
import useGuestCart from "../../hooks/useGuestCart";
function ProductAddToCart({ furniture }) {
  const { wishlist, onFavored, onUnFavored } = useGuestStore();
  const { addToCart } = useGuestCart();
  const [isFavored, setIsFavored] = useState(
    wishlist.some((item) => item._id === furniture._id)
  );

  const handleOnFavored = () => {
    setIsFavored(!isFavored);

    if (!isFavored) onFavored(furniture);
    if (isFavored) onUnFavored(furniture._id);
  };

  const handleAddToCart = () => {
    addToCart(furniture);
  };

  return (
    <section className="flex flex-col justify-center items-center mt-8 w-full">
      <div className="flex gap-2 flex-col w-full">
        <div className="flex gap-2">
          <div className="border px-4 py-3 border-black">
            <FavoriteButton onClick={handleOnFavored} favored={isFavored} />
          </div>

          <button
            onClick={handleAddToCart}
            className="furniture-button-black-hover w-full py-3 text-[11px]"
          >
            Add to cart
          </button>
        </div>
        <button className="uppercase furniture-button-white-hover w-full py-4 text-[11px]">
          Find nearest store
        </button>
      </div>
    </section>
  );
}

export default ProductAddToCart;
