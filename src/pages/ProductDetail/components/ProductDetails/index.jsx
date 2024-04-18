import { useContext, useState } from "react";
import ProductVariation from "../ProductVariation";
import { ProductDetailContext } from "../../ProductDetailContext";

function ProductDetails() {
  const { furniture, setFurniture } = useContext(ProductDetailContext);

  const { attributes, variation, select_variation } = furniture;

  const attributeKeys = Object.keys(attributes.attributeType);

  return (
    <section className="h-full">
      <div className={`overflow-hidden transition-[height] duration-300`}>
        <div>
          <section className="mb-4">
            {variation.map((item, i) => {
              const { _id } = item;
              const currentVariation = [...select_variation].find(
                (i) => i.variation_id === _id
              );

              const updateVariation = (property) => {
                const { _id: property_id, stock, sub_price } = property;

                const updated_select_variation = select_variation.map((obj) =>
                  Object.assign({}, obj)
                );

                updated_select_variation.find(
                  (i) => i.variation_id === _id
                ).property_id = property_id;

                updated_select_variation.find(
                  (i) => i.variation_id === _id
                ).sub_price = sub_price;

                updated_select_variation.find(
                  (i) => i.variation_id === _id
                ).stock = stock;

                setFurniture((preState) => ({
                  ...preState,
                  select_variation: updated_select_variation,
                }));
              };

              return (
                <ProductVariation
                  currentVariation={currentVariation}
                  onUpdateVariation={updateVariation}
                  key={i}
                  variation={item}
                />
              );
            })}
          </section>
          <p className="text-base text-blackPrimary font-HelveticaBold leading-[1.1875] tracking-[0.08em] uppercase pb-2">
            DIMENSIONS AND WEIGHT
          </p>
          <ul className="columns-2 pb-8">
            {attributeKeys.map((key) => {
              const { value, unit } = attributes.attributeType[key];
              return (
                <li
                  key={key}
                  className="text-sm text-blackPrimary leading-[2] tracking-[0.2px]"
                >
                  <span className="text-grey1">{key}:</span> {value} {unit}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
