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

function SelectionInput({ type, onChange }) {
  const { options } = SELECTION_TYPE[type];

  const handleOnChange = (value) => {
    onChange(value);
  };

  return (
    <select
      onChange={(e) => handleOnChange(e.target.value)}
      className="furniture-input py-2 mx-2 text-sm font-sm"
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
