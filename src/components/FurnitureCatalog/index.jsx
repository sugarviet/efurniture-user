import FilterSectionWrapper from "../FilterSectionWrapper";
import FurnitureCard from "../FurnitureCard";

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
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3610a825/images/2070000/2078844.jpg?sw=1200",
    name: "Salamanca 3 seater lounge sofa",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwfe5c3cb1/coloricons/color-dots-polster-75x26.png",
    material: "Brown, Fabric, Metal",
    price: 105900000,
    model_id: "sitzfeldt:GastfreundSchlafsofa2Sitzer",
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw16ac02fc/images/2070000/2073445.jpg?sw=1200",
    name: "Calgary storage with drawer",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "Black, Wood",
    price: 105900000,
    model_id: "sitzfeldt:ViewLoveSeat",
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6ecd2118/images/2010000/2017723.jpg?sw=1200",
    name: "Berne 3 seater",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwfe5c3cb1/coloricons/color-dots-polster-75x26.png",
    material: "Light grey, Fabric, Metal",
    price: 105900000,
    model_id: "sitzfeldt:SetKombielement",
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4f08e587/images/2010000/2019977.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "Black metal",
    price: 105900000,
    model_id: "sitzfeldt:1_Seater_no_armrest",
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf25624f6/images/2010000/2019519.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
    model_id: "sitzfeldt:brick_2seater",
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe5f9ae74/images/2010000/2016066.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
    model_id: "sitzfeldt:fila_mittelteilgross",
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5f7ec034/images/2000000/2000028.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
    model_id: "sitzfeldt:BrickRecamiere",
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

function FurnitureCatalog() {
  return (
    <div className="grid grid-cols-12">
      <section className="col-span-3 px-4">
        {PRODUCT_TYPE.attributes.map((attribute, index) => (
          <FilterSectionWrapper
            key={`${attribute.name} + ${index}`}
            name={attribute.name}
            options={attribute.value}
          />
        ))}
      </section>
      <div className="col-span-9 grid grid-cols-2 gap-2">
        {PRODUCT_CATALOG.map((item, index) => (
          <FurnitureCard item={item} key={`${item.name} + ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default FurnitureCatalog;
