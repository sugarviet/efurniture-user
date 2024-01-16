import { useState } from "react";

import RoomHero from "./components/RoomHero";
import FurnitureCard from "@components/FurnitureCard";
import FurnitureFavorite from "@components/FurnitureCard/FurnitureCardItems/FurnitureFavorite";

import FavoriteButton from "@components/FavoriteButton";

const PRODUCT_CATALOG = [
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce7ff147/images/2070000/2072649.jpg?sw=1200",
    name: "Santiago dining table",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
    model_id: "sitzfeldt:Kombielement",
  },

  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf6fe67af/images/1680000/1683339.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
    model_id: "sitzfeldt:Match",
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa9f2b67a/images/640000/643130.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
    model_id: "sitzfeldt:SetHocker",
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe151cf35/images/1500000/1504516.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
    model_id: "sitzfeldt:Longchair_armrest_left_LP",
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbc0ac763/images/1550000/1558154.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
    model_id: "sitzfeldt:Chuck_Sofa_2_SeaterST2",
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf1d9d3db/images/1530000/1531445.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
    model_id: "sitzfeldt:Panama_Recamiere_links",
  },
];

const RoomDetail = () => {
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

      <section className="mt-10">
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
      </section>

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

export default RoomDetail;
