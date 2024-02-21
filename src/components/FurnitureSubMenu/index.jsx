import { Fragment, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/api-hooks";
import QueryFurnitureTypeMap from "../../shared/api/FurnitureType";
import LoadingSpinner from "../LoadingSpinner";

const formatStringCaseToDashCase = (str) =>
  str.toLowerCase().replace(/\s+/g, "-");

function FurnitureSubMenu({ category }) {
  const { slug, name } = category;
  const { get_api } = QueryFurnitureTypeMap.get("furniture_subtype");

  const { data, isLoading } = useFetch(get_api(slug));

  const filter_element = data ? Object.keys(data) : [];

  if (isLoading) return <LoadingSpinner />;

  return (
    <Fragment>
      <Link
        to={`/products/${slug}`}
        className="pb-6 uppercase text-2xl font-extrabold text-black tracking-widest flex items-center hover:cursor-pointer"
        title={name}
      >
        <span className="mr-6">view all {name}</span>
        <ChevronRightIcon className="w-6 h-6" />
      </Link>
      <ul className="block columns-3">
        {filter_element.map((filter, index) => {
          const elements = data[filter];
          return (
            <li
              className="break-inside-avoid pb-4"
              key={`${filter} + ${index}`}
            >
              <h5 className="uppercase tracking-widest pb-4">{filter}</h5>
              <ul>
                {elements.map((element, index) => {
                  const { _id, type, slug: subtype } = element;
                  return (
                    <li
                      key={_id}
                      className="text-black text-[.75rem] tracking-wider py-1"
                    >
                      <Link
                        to={`/products/${slug}/${subtype}`}
                        className="w-fit relative"
                      >
                        {type}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default FurnitureSubMenu;
