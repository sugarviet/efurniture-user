import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { CheckBoxOptions, ColorOptions } from "./FilterOptions";

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
