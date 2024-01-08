import { Disclosure } from "@headlessui/react";
import { CheckIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const section = {
  id: "category",
  name: "Category",
  options: [
    { value: "new-arrivals", label: "New Arrivals", checked: false },
    { value: "sale", label: "Sale", checked: false },
    { value: "travel", label: "Travel", checked: true },
    { value: "organization", label: "Organization", checked: false },
    { value: "accessories", label: "Accessories", checked: false },
  ],
};

function FilterSection() {
  const [currentOption, setCurrentOption] = useState("");

  return (
    <Disclosure as="div" key={section.id} className="border-gray-200">
      {({ open }) => (
        <>
          <h3 className="flow-root">
            <Disclosure.Button className="border-b flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-sm text-md uppercase text-gray-900">
                {section.name}
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
            <div className="space-y-4">
              {section.options.map((section, optionIdx) => {
                const selected = currentOption === section.value;

                return (
                  <div key={section.value} className="flex items-center">
                    <input
                      id={`filter-${section.id}-${optionIdx}`}
                      name={`${section.id}[]`}
                      defaultValue={section.value}
                      type="radio"
                      className="hidden"
                      onChange={(e) => setCurrentOption(e.target.value)}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
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
                        {section.label}
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default FilterSection;
