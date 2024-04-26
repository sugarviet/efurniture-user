import { useEffect, useState } from "react";
import { classNames } from "../../utils/classNames";

function QuantityOption({
  minValue,
  maxValue,
  quantity,
  handleIncrease,
  handleDecrease,
  handleUpdate,
}) {
  const [value, setValue] = useState(quantity);

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);
  const disableIncrease = quantity >= maxValue;
  const disableDecrease = quantity <= minValue;

  return (
    <div className="flex flex-row items-center">
      <button
        className={`px-[0.9375rem] text-[1.2rem] font-HelveticaBold ${
          disableDecrease && "opacity-[0.2]"
        }`}
        disabled={disableDecrease}
        onClick={handleDecrease}
      >
        -
      </button>
      <div className="">
        <input
          min={1}
          value={value}
          type="number"
          className="furniture-input-hide-arrow outline-none focus:border-b-[0.5px] focus:border-[#191915] text-center w-[2.5rem] h-[1.5em] text-[18px] text-[#000] font-medium font-HelveticaBold"
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => {
            const curValue = e.target.value;
            const newValue = curValue >= maxValue ? maxValue : curValue;
            setValue(newValue);
            handleUpdate(newValue);
          }}
        />
      </div>
      <button
        onClick={handleIncrease}
        className={classNames(
          disableIncrease && "opacity-[0.2]",
          "px-[0.9375rem] text-[1.2rem] font-HelveticaBold"
        )}
        disabled={disableIncrease}
      >
        +
      </button>
    </div>
  );
}

export default QuantityOption;
