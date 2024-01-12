import { Disclosure } from "@headlessui/react";
import { CheckIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

const FilterSection = ({ name, children }) => {
  return (
    <Disclosure as="div" key={name} className="border-gray-200">
      {({ open }) => (
        <Fragment>
          <h3 className="flow-root">
            <Disclosure.Button className="border-b flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-sm text-md uppercase text-gray-900">
                {name}
              </span>
              <span className="ml-6 flex items-center">
                <PlusIcon
                  className={`h-6 w-6 duration-500 ${open ? "-rotate-45" : ""}`}
                  aria-hidden="true"
                />
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-4">{children}</div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  );
};

const useFilterOptions = (Component) => {
  return ({ options }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectOption = (option) => {
      const newOptions = [...selectedOptions, option];

      const uniqueOptions = newOptions.filter(
        (value) => newOptions.indexOf(value) === newOptions.lastIndexOf(value)
      );

      setSelectedOptions(uniqueOptions);
    };

    return (
      <Component
        options={options}
        selectedOptions={selectedOptions}
        handleSelectOption={handleSelectOption}
      />
    );
  };
};

const CheckBoxOptions = useFilterOptions(
  ({ options, selectedOptions, handleSelectOption }) => {
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
);

const ColorOptions = useFilterOptions(
  ({ options, selectedOptions, handleSelectOption }) => {
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
);

const SECTION_TYPE = {
  color: {
    Component: ColorOptions,
  },
  material: {
    Component: CheckBoxOptions,
  },
};

export default function FilterSectionWrapper({ name, options }) {
  const OptionComponent = SECTION_TYPE[name].Component;

  return (
    <FilterSection name={name}>
      <OptionComponent options={options} />
    </FilterSection>
  );
}
