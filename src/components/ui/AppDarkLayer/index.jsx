import { classNames } from "@utils/classNames";
import Proptypes from "prop-types";

const AppDarkLayer = ({ isOpen }) => {

  return (
    <div
      className={classNames(
        isOpen
          ? "fixed inset-0 bg-black opacity-20 transition-opacity duration-300 -z-30"
          : "hidden"
      )}
    ></div>
  );
};

AppDarkLayer.propTypes = {
  isOpen: Proptypes.bool.isRequired,
  onClose: Proptypes.func
};

export default AppDarkLayer;
