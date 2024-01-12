import { useState } from "react";
import PropTypes from "prop-types";
import { ViewfinderCircleIcon } from "@heroicons/react/20/solid";

function BaseButton(props) {
  const { path, onClick } = props;

  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      stroke="currentColor"
      className="w-6 h-6 hover:cursor-pointer"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

function StateButton(props) {
  const { activated, path, onClick } = props;

  const [active, setActive] = useState(activated);

  const handleOnClick = () => {
    setActive(!active);
    onClick(active);
  };

  return (
    <svg
      onClick={handleOnClick}
      xmlns="http://www.w3.org/2000/svg"
      fill={active ? "black" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 hover:cursor-pointer"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

StateButton.propTypes = {
  activated: PropTypes.bool,
  path: PropTypes.string,
  onClick: PropTypes.func,
};

export const FavoriteButton = (props) => {
  return (
    <StateButton
      path={
        "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      }
      {...props}
    />
  );
};

FavoriteButton.propTypes = {
  onClick: PropTypes.func,
  activated: PropTypes.bool,
};

export const ViewFinderCircleButton = (props) => {
  return (
    <BaseButton
      path={
        "M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      }
      {...props}
    />
  );
};

ViewFinderCircleButton.propTypes = {
  onClick: PropTypes.func,
};

export const CubeButton = (props) => {
  return (
    <BaseButton
      path={
        "m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      }
      {...props}
    />
  );
};

CubeButton.prototype = {
  onClick: PropTypes.func,
};
