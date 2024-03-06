import { useState } from "react";
import FilterSectionWrapper from "../FilterSectionWrapper";
import FurnitureCard from "../FurnitureCard";
import useAuth from "../../stores/useAuth";
import findAttributeRange from "../../utils/findAttributeRange";
import SelectionInput from "../SelectionInput";
import EmptyProductResult from "../EmptyProductResult";

function FurnitureCatalog({ data }) {
  const [catalog, setCatalog] = useState(data.data || []);
  const { accessToken } = useAuth();

  if (!data.data.length) return <EmptyProductResult />;

  const ATTRIBUTE_OBJ = data.data[0].attributes.attributeType;

  const ATTRIBUTES_RANGE = findAttributeRange(
    Object.entries(ATTRIBUTE_OBJ).map(([key, value]) => ({ [key]: value }))
  );
  const ATTRIBUTES = Object.keys(ATTRIBUTE_OBJ);

  const handleFilter = (attribute, range) => {
    const dataClone = [...data.data];

    const filterCatalog = dataClone.filter((item) => {
      const value = (item.attributes.attributeType[attribute] + "").match(
        /\d+/
      )[0];

      return value <= range[1] && value >= range[0];
    });

    setCatalog(filterCatalog);
  };

  const handleSort = (value) => {
    const catalogClone = [...catalog];

    const sortedCatalog = catalogClone.sort((a, b) => {
      if (value === "price_asc") return a.sale_price - b.sale_price;
      if (value === "price_desc") return b.sale_price - a.sale_price;
    });

    setCatalog(sortedCatalog);
  };

  return (
    <div className="grid grid-cols-12">
      <section className="hidden md:flex md:col-span-12 md:flex-row-reverse px-4">
        <div>
          <span className="text-sm">Sort by: </span>
          <SelectionInput onChange={handleSort} type="furniture_sorting" />
        </div>
      </section>
      <section className="hidden md:block md:col-span-3 lg:col-span-3 xl:col-span-3 px-4">
        {ATTRIBUTES.map((attribute, index) => {
          const options = {
            onChange: (value) => {
              handleFilter(attribute, value);
            },
            max: ATTRIBUTES_RANGE[1][attribute].val,
            min: 0,
            unit: ATTRIBUTES_RANGE[0][attribute].unit || attribute,
          };

          return (
            <FilterSectionWrapper
              key={`${attribute} + ${index}`}
              name={attribute}
              options={options}
            />
          );
        })}
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
                {accessToken ? (
                  <FurnitureCard.UserShoppingButton />
                ) : (
                  <FurnitureCard.GuestShoppingButton />
                )}
              </div>
            </FurnitureCard>
          );
        })}
      </div>
    </div>
  );
}

export default FurnitureCatalog;
