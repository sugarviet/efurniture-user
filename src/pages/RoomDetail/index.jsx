import { useState } from "react";
import PropTypes from "prop-types";

import RoomHero from "./components/RoomHero";
import FurnitureCard from "@components/FurnitureCard";

import FavoriteButton from "@components/FavoriteButton";
import useAuth from "@stores/useAuth";
import formattedCurrency from "../../utils/formattedCurrency";
import { withFetchData } from "../../hocs/withFetchData";
import { get_room_detail } from "../../api/roomApi";
import useCart from "../../hooks/useGuestCart";

const RoomDetail = ({ data }) => {
  const [catalog] = useState(data.products);
  const { addManyToCart } = useCart();
  const { accessToken } = useAuth();

  return (
    <main className="my-2">
      <RoomHero />
      <h2 className="text-center my-24 text-lg font-bold">
        PRODUCTS IN THE ROOM
      </h2>

      <div className="lg:col-span-9 md:col-span-9 col-span-12 grid grid-cols-2 gap-2">
        {catalog.map((item) => {
          const { _id } = item.product;
          return (
            <FurnitureCard item={item.product} key={_id}>
              <FurnitureCard.Model className="w-[60%]">
                {accessToken ? (
                  <FurnitureCard.UserFavorite />
                ) : (
                  <FurnitureCard.Favorite />
                )}
              </FurnitureCard.Model>
              <div className="px-[18px] relative flex flex-col justify-between">
                <FurnitureCard.Attribute />
                <FurnitureCard.Price />
                <FurnitureCard.ShoppingButton />
              </div>
            </FurnitureCard>
          );
        })}
      </div>

      <hr className="w-1/2 mx-auto" />

      <section className="flex flex-col justify-center items-center mt-8">
        <p className="w-96 text-sm text-center text-slate-500">
          Products in the room:{" "}
          {catalog
            .map((item) => `${item.quantity} x ${item.product.name}`)
            .join(", ")}
        </p>
        <p className="text-lg font-semibold mt-6 mb-2">
          Buy all for{" "}
          {formattedCurrency(
            catalog.reduce(
              (total, item) => total + item.quantity * item.product.sale_price,
              0
            )
          )}
        </p>

        <div className="flex gap-2 flex-col">
          <div className="flex gap-2">
            <div className="border p-2 border-black">
              <FavoriteButton />
            </div>

            <button
              onClick={() => addManyToCart(catalog)}
              className="uppercase bg-black text-white font-semibold px-36 py-3 text-xs"
            >
              Add to cart
            </button>
          </div>
          <button className="uppercase bg-white text-black font-semibold px-36 py-3 text-xs border border-black">
            Find nearest store
          </button>
        </div>
      </section>
    </main>
  );
};

RoomDetail.propTypes = {
  data: PropTypes.object,
};

export default withFetchData(RoomDetail, get_room_detail);
