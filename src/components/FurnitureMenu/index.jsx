import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../utils/classNames";
import { useState } from "react";
import FurnitureSubMenu from "../FurnitureSubMenu";
import { withFetchData } from "../../hocs/withFetchData";
import { get_furniture_type_api } from "../../api/furnitureTypeApi";

function FurnitureMenu({ data }) {
  const [categories] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState(data[0]);

  return (
    <div className="grid grid-cols-10 min-h-[384px] lg:py-10 bg-white">
      <div className="col-span-10 lg:col-span-2">
        <ul>
          {categories.map((category) => {
            const { _id, name } = category;
            const selected = selectedCategory._id === _id;

            return (
              <li key={_id}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={classNames(
                    "w-full py-3 px-8 font-medium text-black text-sm text-[.75rem] tracking-widest capitalize flex items-center justify-between lg:border-r-[.0625rem]",
                    selected ? "bg-[#ebebe6]" : ""
                  )}
                >
                  <p>{name}</p>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden col-span-8 h-40 px-8 lg:grid lg:grid-cols-3">
        <div className="col-span-2">
          <FurnitureSubMenu
            slug={selectedCategory.slug}
            name={selectedCategory.name}
          />
        </div>
        <div className="col-span-1">
          <a>
            <img
              className="w-full h-56 object-cover"
              src={selectedCategory.thumb}
            />
          </a>
          <a
            className="py-6 uppercase text-2xl font-extrabold text-black tracking-widest flex items-center hover:cursor-pointer"
            title={selectedCategory.name}
          >
            <span className="mr-6">discover {selectedCategory.name}</span>
            <ChevronRightIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default withFetchData(FurnitureMenu, get_furniture_type_api);
