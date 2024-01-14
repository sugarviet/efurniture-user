import PropTypes from "prop-types";
import { useState } from "react";

function ColorOptions(props) {
  const { options } = props;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectOption = (option) => {
    const newOptions = [...selectedOptions, option];

    const uniqueOptions = newOptions.filter(
      (value) => newOptions.indexOf(value) === newOptions.lastIndexOf(value)
    );

    setSelectedOptions(uniqueOptions);
  };

  return (
    <section className="flex flex-wrap gap-1">
      {options.map((color) => {
        const selected = selectedOptions.includes(color);

        return (
          <div
            key={color}
            className={`flex items-center justify-center ${
              selected ? "border-2 border-black p-1" : null
            }`}
          >
            <button
              onClick={() => handleSelectOption(color)}
              key={color}
              style={{ backgroundColor: color }}
              className="rounded-full w-10 h-10"
            />
          </div>
        );
      })}
    </section>
  );
}

ColorOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ColorOptions;
