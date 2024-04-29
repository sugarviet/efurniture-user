import WebServices from "@components/WebServices";
import FurnitureCard from "../../components/FurnitureCard";
import { useGuestStore } from "../../stores/useGuestStore";
import withNonAuthentication from "../../hocs/withNonAuthentication";

const Wishlist = () => {
  const { wishlist } = useGuestStore();

  const HAVE_ITEM = wishlist.length > 0;

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
        {wishlist.map((item) => {
          const { _id } = item;
          return (
            <FurnitureCard item={item} key={_id}>
              <FurnitureCard.Model className="w-[60%]">
                <FurnitureCard.Favorite />
                <FurnitureCard.DimensionOption />
              </FurnitureCard.Model>
              <div className="px-[18px] relative flex flex-col justify-between">
                <FurnitureCard.Attribute />
                <FurnitureCard.Price />
                <FurnitureCard.GuestShoppingButton />
              </div>
            </FurnitureCard>
          );
        })}
      </div>

      {/* <WebServices /> */}
    </main>
  );
};

export default withNonAuthentication(Wishlist);
