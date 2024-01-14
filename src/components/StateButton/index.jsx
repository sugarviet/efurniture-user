import PropTypes from "prop-types";
import { useState } from "react";
import Icon2D from "../Icon2D";

const BUTTON_TYPE = {
  favorite: {
    active_icon: "heart_fill",
    inactive_icon: "heart_solid",
  },
};

export default function StateButton(props) {
  const { activated, onClick, name } = props;
  const { active_icon, inactive_icon } = BUTTON_TYPE[name];

  const [active, setActive] = useState(activated);
  const [iconName, setIconName] = useState(
    activated ? active_icon : inactive_icon
  );

  const handleOnClick = () => {
    const currentState = !active;

    setActive(currentState);
    setIconName(currentState ? active_icon : inactive_icon);
    onClick(currentState);
  };

  return <Icon2D {...props} onClick={handleOnClick} name={iconName} />;
}

StateButton.propTypes = {
  activated: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
};
