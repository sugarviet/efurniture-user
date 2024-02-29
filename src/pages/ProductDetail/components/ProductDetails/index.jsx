import { useContext, useState } from "react";
import { FurnitureDetailContext } from "../../ProductDetailContext";

const details = [
  {
    section: "dimenstions and weight",
    attribute: [
      { label: "Height", value: "74½ cm" },
      { label: "Length", value: "230 cm" },
      { label: "Width", value: "99½ cm" },
      { label: "Tabletop thickness", value: "2½ cm" },
      { label: "Height to table top", value: "72 cm" },
      { label: "Weight", value: "63 kg" },
      { label: "Maximum weight load", value: "80 kg" },
      { label: "Seats", value: "8" },
    ],
  },
  {
    section: "materials",
    attribute: [
      { label: "Tabletop", value: "ceramic/fibreboard" },
      { label: "Frame", value: "fibreboard" },
      { label: "Leg", value: "fibreboard" },
    ],
  },
  {
    section: "finish",
    attribute: [
      { label: "Tabletop", value: "ceramic/lacquered" },
      { label: "Frame", value: "lacquered" },
      { label: "Leg", value: "lacquered" },
    ],
  },
  {
    section: "assembly instructions",
    attribute: [
      {
        label: "Instructions",
        value:
          "This product is easy to assemble. Just follow the instructions and we’re sure you can do it without any extra help from us.",
      },
    ],
  },
  {
    section: "downloads",
    attribute: [
      { label: "Product sheet", value: "(~100 KB)" },
      { label: "2106054.3ds", value: "(779 KB)" },
      { label: "2106072.dwg", value: "(491 KB)" },
    ],
  },
  {
    section: "item number",
    attribute: [{ label: "Item number", value: "370054800714008" }],
  },
  {
    section: "designer",
    attribute: [{ label: "Designer", value: "Morten Georgsen" }],
  },
];

function ProductDetails() {
  const { furniture } = useContext(FurnitureDetailContext);
  const { attributes } = furniture;

  const attributeKeys = Object.keys(attributes.attributeType);

  return (
    <section className="h-full">
      <div className={`overflow-hidden transition-[height] duration-300`}>
        <div>
          <p className="text-base text-blackPrimary font-HelveticaBold leading-[1.1875] tracking-[0.08em] uppercase pb-2">
            DIMENSIONS AND WEIGHT
          </p>
          <ul className="columns-2 pb-8">
            {attributeKeys.map((key) => {
              return (
                <li
                  key={key}
                  className="text-sm text-blackPrimary leading-[2] tracking-[0.2px]"
                >
                  <span className="text-grey1">{key}:</span>{" "}
                  {attributes.attributeType[key]}
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
