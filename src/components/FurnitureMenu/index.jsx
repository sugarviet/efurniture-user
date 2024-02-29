import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../utils/classNames";
import { useState } from "react";
import FurnitureSubMenu from "../FurnitureSubMenu";
import { withFetchData } from "../../hocs/withFetchData";
import { get_furniture_type_api } from "../../api/furnitureTypeApi";

const FURNITURE_CATEGORIES = [
  {
    id: "sofa",
    name: "sofa",
    thumbnail:
      "https://p3.aprimocdn.net/boconcept/4e84672f-cd80-4f16-a319-aff50065d4ab/AW23%20565_WEB-SliderNavigation-660x470.jpg",
    filter_element: [
      {
        label: "by size",
        elements: [
          "Small and 2 seater sofas",
          "2.5 seater sofas",
          "3 seater sofas",
          "Large and 4 seater sofas",
        ],
      },
      {
        label: "by type",
        elements: [
          "Corner sofas",
          "Sofas beds",
          "Chaise Longue sofas",
          "Modular sofas",
        ],
      },
    ],
  },
  {
    id: "armchairs",
    name: "armchairs",
    filter_element: [
      {
        label: "by size",
        elements: [
          "Small and 2 seater sofas",
          "2.5 seater sofas",
          "3 seater sofas",
          "Large and 4 seater sofas",
        ],
      },
      {
        label: "by type",
        elements: [
          "Corner sofas",
          "Sofas beds",
          "Chaise Longue sofas",
          "Modular sofas",
        ],
      },
    ],
    thumbnail:
      "https://p3.aprimocdn.net/boconcept/9f0fd3da-1152-4a9c-92df-afd900806014/AW23%2063_WEB-ProductCarousel-660x470.jpg",
  },
  {
    id: "chairs",
    name: "chairs",
    thumbnail:
      "https://p3.aprimocdn.net/boconcept/382fa9b5-8027-4dfe-95c7-ae6d00c2a925/AW22%20034_WEB-SliderNavigation-660x470.jpg",
    filter_element: [
      {
        label: "by type",
        elements: [
          "Armchairs",
          "Recliners",
          "Footstools",
          "Outdoor lounge chairs",
        ],
      },
      {
        label: "by material",
        elements: ["Boucle chairs"],
      },
    ],
  },
  {
    id: "tables",
    name: "tables",
    thumbnail:
      "https://p3.aprimocdn.net/boconcept/505b9e14-bbac-4e1d-9d65-afd90080679f/AW23%2078_WEB-SliderNavigation-660x470.jpg",
    filter_element: [
      {
        label: "by size",
        elements: [
          "Small and 2 seater sofas",
          "2.5 seater sofas",
          "3 seater sofas",
          "Large and 4 seater sofas",
        ],
      },
      {
        label: "by type",
        elements: [
          "Corner sofas",
          "Sofas beds",
          "Chaise Longue sofas",
          "Modular sofas",
        ],
      },
    ],
  },
  {
    id: "storage",
    name: "storage",
    thumbnail:
      "https://p3.aprimocdn.net/boconcept/08648cea-b86e-4596-ad3e-afd600937421/AW23%2038_WEB-ProductCarousel-660x470.jpg",
    filter_element: [
      {
        label: "by size",
        elements: [
          "Small and 2 seater sofas",
          "2.5 seater sofas",
          "3 seater sofas",
          "Large and 4 seater sofas",
        ],
      },
      {
        label: "by type",
        elements: [
          "Corner sofas",
          "Sofas beds",
          "Chaise Longue sofas",
          "Modular sofas",
        ],
      },
    ],
  },
  {
    id: "beds",
    name: "beds",
    thumbnail:
      "https://p3.aprimocdn.net/boconcept/a82662c3-b4a5-463f-b725-ae6d00c32ca5/AW22%20074_WEB-SliderNavigation-660x470.jpg",
    filter_element: [
      {
        label: "by size",
        elements: [
          "Small and 2 seater sofas",
          "2.5 seater sofas",
          "3 seater sofas",
          "Large and 4 seater sofas",
        ],
      },
      {
        label: "by type",
        elements: [
          "Corner sofa",
          "Sofas beds",
          "Chaise Longue sofas",
          "Modular sofas",
        ],
      },
    ],
  },
  {
    id: "beds",
    name: "beds",
    thumbnail:
      "https://p3.aprimocdn.net/boconcept/a82662c3-b4a5-463f-b725-ae6d00c32ca5/AW22%20074_WEB-SliderNavigation-660x470.jpg",
    filter_element: [
      {
        label: "by size",
        elements: [
          "Small and 2 seater sofas",
          "2.5 seater sofas",
          "3 seater sofas",
          "Large and 4 seater sofas",
        ],
      },
      {
        label: "by type",
        elements: [
          "Corner sofas",
          "Sofas beds",
          "Chaise Longue sofas",
          "Modular sofas",
        ],
      },
    ],
  },
];

function FurnitureMenu({ data }) {
 
  const [categories] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState(data[0]);
  console.log(selectedCategory);

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
