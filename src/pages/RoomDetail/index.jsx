import { useState } from "react";
import PropTypes from "prop-types";

import RoomHero from "./components/RoomHero";
import FurnitureCard from "@components/FurnitureCard";
import FurnitureFavorite from "@components/FurnitureCard/FurnitureCardItems/FurnitureFavorite";

import FavoriteButton from "@components/FavoriteButton";
import useAuth from "@stores/useAuth";
import { withFetchData } from "../../hocs/withFetchData";
import { get_furniture_by_room_api } from "../../api/furnitureApi";

const RoomDetail = ({ data }) => {
  const [catalog] = useState(data || []);
  console.log(catalog);
  const { accessToken } = useAuth();

  const [isFavored, setIsFavored] = useState(false);
  const handleOnClick = () => {
    setIsFavored(!isFavored);
  };

  return (
    <main className="my-2">
      <RoomHero />
      <h2 className="text-center my-24 text-lg font-bold">
        PRODUCTS IN THE ROOM
      </h2>

      {/* <section className="mt-10">
        <div className="grid grid-cols-3 gap-2">
          {PRODUCT_CATALOG.map((item, index) => {
            return (
              <FurnitureCard item={item} key={`${item.name} + ${index}`}>
                <FurnitureCard.Model>
                  <FurnitureFavorite />
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
      </section> */}

      <div className="lg:col-span-9 md:col-span-9 col-span-12 grid grid-cols-2 gap-2">
        {catalog.map((item) => {
          const { _id } = item;
          return (
            <FurnitureCard item={item} key={_id}>
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
          Products in the room: 1 x Kingston, 4 x Princeton, 1 x Calgary, 1 x
          Calgary, 1 x Luna, 1 x Form
        </p>
        <p className="text-lg font-semibold mt-6 mb-2">
          Buy all for ₫ 190.037.500,00
        </p>

        <div className="flex gap-2 flex-col">
          <div className="flex gap-2">
            <div className="border p-2 border-black">
              <FavoriteButton onClick={handleOnClick} favored={isFavored} />
            </div>

            <button className="uppercase bg-black text-white font-semibold px-36 py-3 text-xs">
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
  data: PropTypes.array,
};

export default withFetchData(RoomDetail, get_furniture_by_room_api);
