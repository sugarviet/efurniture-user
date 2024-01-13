import { useState } from "react";
import PropTypes from "prop-types";
import { CheckIcon } from "@heroicons/react/20/solid";

function CheckBoxOptions(props) {
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
    <section>
      {options.map((option, index) => {
        const selected = selectedOptions.includes(option);

        return (
          <div key={option} className="flex items-center">
            <input
              id={`filter-${option}-${index}`}
              name={`${option}`}
              defaultValue={option}
              type="checkbox"
              className="hidden"
              onChange={(e) => handleSelectOption(e.target.value)}
            />
            <label
              htmlFor={`filter-${option}-${index}`}
              className={`text-gray-600 text-sm hover:cursor-pointer ${
                selected ? "font-bold" : "font-base"
              }`}
            >
              <div className="flex">
                <CheckIcon
                  className={`w-4 h-4 mr-2 ${
                    selected ? "visible" : "invisible"
                  }`}
                />
                {option}
              </div>
            </label>
          </div>
        );
      })}
    </section>
  );
}

CheckBoxOptions.PropTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CheckBoxOptions;
