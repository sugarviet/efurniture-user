import { useState } from "react";
import FilterSectionWrapper from "../FilterSectionWrapper";
import FurnitureCard from "../FurnitureCard";
import { withFetchData } from "../../hocs/withFetchData";
import { get_furniture_by_type_api } from "../../api/furnitureApi";
import useAuth from "../../stores/useAuth";

const COLORS = [
  "#8a4c8a",
  "#4d7d9d",
  "#b36b24",
  "#2d866d",
  "#a94659",
  "#6e5e1a",
  "#356ca2",
  "#8e2d25",
  "#635288",
  "#41875c",
];

const MATERIALS = ["Aluminium", "Silver", "Fabric", "Lacquered"];

const PRODUCT_TYPE = {
  name: "SOFAS",
  attributes: [
    { name: "color", value: COLORS },
    { name: "material", value: MATERIALS },
  ],
};

function FurnitureCatalog({ data }) {
  const [catalog] = useState(data || []);

  const { accessToken } = useAuth();

  return (
    <div className="grid grid-cols-12">
      <section className="hidden md:block md:col-span-3 lg:col-span-3 xl:col-span-3 px-4">
        {PRODUCT_TYPE.attributes.map((attribute, index) => (
          <FilterSectionWrapper
            key={`${attribute.name} + ${index}`}
            name={attribute.name}
            options={attribute.value}
          />
        ))}
      </section>
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
    </div>
  );
}

export default FurnitureCatalog;
