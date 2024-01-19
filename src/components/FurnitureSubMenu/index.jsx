import { Fragment } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { PATH } from "../../router";

function FurnitureSubMenu({ category }) {
  const { name, filter_element } = category;
  return (
    <Fragment>
      <Link
        to={PATH.products}
        className="pb-6 uppercase text-2xl font-extrabold text-black tracking-widest flex items-center hover:cursor-pointer"
        title={name}
      >
        <span className="mr-6">view all {name}</span>
        <ChevronRightIcon className="w-6 h-6" />
      </Link>
      <ul className="block columns-3">
        {filter_element.map((filter, index) => {
          const { label, elements } = filter;
          return (
            <li className="break-inside-avoid pb-4" key={`${label} + ${index}`}>
              <h5 className="uppercase tracking-widest pb-4">{label}</h5>
              <ul>
                {elements.map((element, index) => (
                  <li
                    key={`${element} + ${index}`}
                    className="text-black text-[.75rem] tracking-wider py-1"
                  >
                    <Link to={PATH.products} className="w-fit relative">
                      {element}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default FurnitureSubMenu;
