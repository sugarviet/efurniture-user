import FilterSection from "../FilterSection";
import FurnitureCard from "../FurnitureCard";

function FurnitureCatalog() {
  return (
    <div className="grid grid-cols-12">
      <section className="col-span-3 px-4">
        <FilterSection />
        <FilterSection />
        <FilterSection />
        <FilterSection />
      </section>
      <div className="col-span-9 grid grid-cols-2 gap-2 h-min">
        <FurnitureCard />
        <FurnitureCard />
        <FurnitureCard />
      </div>
    </div>
  );
}

export default FurnitureCatalog;
