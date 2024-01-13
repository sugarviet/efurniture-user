import { useState } from "react";
import PropTypes from "prop-types";

const BUTTON_TYPE = {
  favorite: {
    path: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
  },
};

export default function StateButton(props) {
  const { activated, onClick, name } = props;
  const { path } = BUTTON_TYPE[name];

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
  name: PropTypes.string,
  onClick: PropTypes.func,
};
