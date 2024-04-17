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
        "border w-fit p-2",
        selectProperty === _id ? "border-black" : "border-gray-300",
        outOfStock ? "opacity-10" : ""
      )}
    >
      <div
        style={{ backgroundColor: value }}
        className={`rounded-full w-10 h-10 border ${className}`}
      ></div>
    </button>
  );
}

export default ProductColorProperty;
