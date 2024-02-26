import WebServices from "@components/WebServices";
import { useGuestStore } from "../../stores/useGuestStore";
import FurnitureCard from "../../components/FurnitureCard";

const Wishlist = () => {
  const items = useGuestStore((store) => store.wishlist);

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

      {/* Wishlist items */}
      <div className="grid grid-cols-3">
        {items.map((item) => {
          const { _id } = item;
          return (
            <FurnitureCard item={item} key={_id}>
              <FurnitureCard.Model className="w-[60%]">
                <FurnitureCard.Favorite />
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
