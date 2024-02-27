import WebServices from "@components/WebServices";
import FurnitureCard from "../../components/FurnitureCard";
import useAuth from "../../stores/useAuth";
import { useEffect, useState } from "react";
import { useFetchWithAuth } from "../../hooks/api-hooks";
import { get_wishlist_api } from "../../api/wishlistApi";
import { useGuestStore } from "../../stores/useGuestStore";
import LoadingSpinner from "../../components/LoadingSpinner";

const Wishlist = () => {
  const { wishlist } = useGuestStore();
  const [items, setItems] = useState(wishlist);
  const { accessToken } = useAuth();
  const { data } = useFetchWithAuth(get_wishlist_api(), undefined, {
    enabled: accessToken !== null,
  });

  useEffect(() => {
    if (!accessToken || !data) return;

    setItems(data);
  }, [accessToken, data]);

  const HAVE_ITEM = items.length > 0;

  return (
    <main className="flex flex-col items-center">
      <section className="block p-28">
        <h1 className="uppercase text-5xl font-[900] text-center tracking-widest">
          FAVORITES
        </h1>
      </section>

      {HAVE_ITEM && (
        <section className="border-gray-400 border-t border-b w-3/4 py-6 mb-4">
          <p className="text-center">
            Do you want to share your favorites with someone else?{" "}
            <a className="underline" href="#">
              Login
            </a>
          </p>
        </section>
      )}

      <div className="grid grid-cols-3">
        {items.map((item) => {
          const { _id } = item;
          return (
            <FurnitureCard item={item} key={_id}>
              <FurnitureCard.Model className="w-[60%]">
                {accessToken ? (
                  <FurnitureCard.UserFavorite />
                ) : (
                  <FurnitureCard.Favorite />
                )}
                <FurnitureCard.DimensionOption />
              </FurnitureCard.Model>
              <div className="px-[18px] flex flex-col justify-between gap-4">
                <FurnitureCard.Attribute />
                <FurnitureCard.Price />
              </div>
            </FurnitureCard>
          );
        })}
      </div>

      <WebServices />
    </main>
  );
};

export default Wishlist;
