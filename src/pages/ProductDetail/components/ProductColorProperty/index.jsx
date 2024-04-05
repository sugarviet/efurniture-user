import { classNames } from "../../../../utils/classNames";

function ProductColorProperty({ property, selectProperty, onSelectProperty }) {
  const { value, _id } = property;

  return (
    <button
      onClick={() => {
        onSelectProperty(_id);
      }}
      className={classNames(
        "border w-fit p-2",
        selectProperty === _id ? "border-black" : "border-gray-300"
      )}
    >
      <div
        style={{ backgroundColor: value }}
        className="rounded-full w-10 h-10"
      ></div>
    </button>
  );
}

export default ProductColorProperty;
