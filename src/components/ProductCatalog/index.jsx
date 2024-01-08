import FilterSection from "../FilterSection";

function ProductCatalog() {
  return (
    <div className="grid grid-cols-12">
      <section className="col-span-3 px-4">
        <FilterSection />
        <FilterSection />
        <FilterSection />
        <FilterSection />
      </section>
      <div className="col-span-9 grid grid-cols-2 gap-4 h-min">
        <div className="h-40 bg-pink-300"></div>
        <div className="h-40 bg-pink-300"></div>
        <div className="h-40 bg-pink-300"></div>
        <div className="h-40 bg-pink-300"></div>
      </div>
    </div>
  );
}

export default ProductCatalog;
