import { useState } from "react";
import FormattedCurrency from "../../utils/FormattedCurrency";
import RoomleConfiguration3D from "../RoomleConfiguration3D";

function FurnitureCard() {
  const [model, setModel] = useState("2D");

  return (
    <article className="mb-4">
      <div className="relative">
        <a title="Go to ...">
          <div className="h-60">
            {model === "2D" && (
              <img
                className="object-contain object-center w-4/5 h-full"
                src="https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw186002c3/images/1520000/1526321.jpg?sw=1200"
              />
            )}

            {model === "3D" && <RoomleConfiguration3D />}
          </div>
        </a>
        <div className="absolute top-0 right-0 flex flex-col pr-4 pt-2">
          <button className="p-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
          <button
            onClick={() => setModel("3D")}
            className="p-1 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between p-2">
        <div>
          <div>
            <img
              className="transition-opacity transition-600 h-6"
              src="https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwfe5c3cb1/coloricons/color-dots-polster-75x26.png"
              alt="product-color"
            />
          </div>
          <div className="font-medium text-sm mt-2">
            <span>Zürich sofa with resting unit</span>
          </div>
          <span className="font-base text-xs flex flex-wrap">
            Green, Fabric, Mental Green
          </span>
        </div>
        <div className="flex mt-3 pb-3 items-end gap-3">
          <div className="flex flex-wrap">
            <span className="text-xs font-base w-full">Rec, retail price</span>
            <span className="mr-2 font-medium text-sm">
              {FormattedCurrency(492915)}
            </span>
            <span className="font-base text-sm line-through">
              {FormattedCurrency(579900)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FurnitureCard;
