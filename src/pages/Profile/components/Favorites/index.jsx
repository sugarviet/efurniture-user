import { withFetchDataWithHeaders } from "../../../../hocs/withFetchDataWithHeaders";
import { get_wishlist_api } from "../../../../api/wishlistApi";
import FurnitureCard from "../../../../components/FurnitureCard";

const Favorites = ({ data }) => {
  return (
    <section className="fade-in-from-bottom">
      <div className="grid grid-cols-2">
        {data.map((item) => {
          const { _id } = item;
          return (
            <FurnitureCard item={item} key={_id}>
              <FurnitureCard.Model className="w-[60%]">
                <FurnitureCard.UserFavorite />
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
    </section>
  );
};

export default withFetchDataWithHeaders(Favorites, get_wishlist_api);
