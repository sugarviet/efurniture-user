import Proptypes from "prop-types";

const AppDarkLayer = ({ isOpen, onClose }) => {

  return (
    <div
      className={`${
        isOpen
          ? "fixed inset-0 bg-black opacity-50 transition-opacity duration-300 z-50"
          : "hidden"
      }`}
      onClick={onClose}
    ></div>
  );
};

AppDarkLayer.propTypes = {
  isOpen: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
};

export default AppDarkLayer;
