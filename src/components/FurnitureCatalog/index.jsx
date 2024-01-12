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

function FurnitureCatalog() {
  return (
    <div className="grid grid-cols-12">
      <section className="col-span-3 px-4">
        {PRODUCT_TYPE.attributes.map((attribute) => (
          <FilterSectionWrapper
            name={attribute.name}
            options={attribute.value}
          />
        ))}
      </section>
      <div className="col-span-9 grid grid-cols-2 gap-2 h-min">
        <FurnitureCard />
      </div>
    </div>
  );
}

export default FurnitureCatalog;
