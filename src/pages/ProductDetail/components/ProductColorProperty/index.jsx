import { classNames } from "../../../../utils/classNames";

function ProductColorProperty({
  property,
  selectProperty,
  onSelectProperty,
  className,
}) {
  const { value, _id, stock } = property;

  const outOfStock = !(stock > 0);

  return (
    <button
      disabled={outOfStock}
      onClick={() => {
        onSelectProperty(property);
      }}
      className={classNames(
        "border w-fit p-2 relative",
        selectProperty === _id ? "border-black" : "border-gray-300"
      )}
    >
      <div
        style={{ backgroundColor: value }}
        className={`rounded-full w-10 h-10 border ${className}`}
      ></div>
      {outOfStock && (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-white opacity-70 flex items-center justify-center">
          <div className="border border-dashed border-black shadow-xl -rotate-45 flex items-center justify-center">
            <span className="uppercase text-[8px] font-bold tracking-widest">
              out of stock
            </span>
          </div>
        </div>
      )}
    </button>
  );
}

export default ProductColorProperty;
