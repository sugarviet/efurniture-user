import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const SELECTION_TYPE = {
  furniture_sorting: {
    options: [
      {
        value: "price_asc",
        label: "Price (ascending)",
      },
      {
        value: "price_desc",
        label: "Price (descending)",
      },
    ],
  },
};

function SelectionInput({ onChange, options, className }) {
  const handleOnChange = (value) => {
    onChange(value);
  };

  return (
    <select
      onChange={(e) => handleOnChange(e.target.value)}
      className={classNames(
        "furniture-input py-2 mx-2 text-sm font-sm",
        className
      )}
    >
      <option value="">Please select one</option>
      {options.map((option) => {
        const { value, label } = option;
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
}

export default SelectionInput;

SelectionInput.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};
