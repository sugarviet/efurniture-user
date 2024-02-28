import PropTypes from "prop-types";
import styles from "./DimensionButton.module.css";
import { classNames } from "../../utils/classNames";

function DimensionButton(props) {
  const { onClick, selected, name } = props;

  return (
    <button
      onClick={() => {
        onClick();
        console.log("haha");
      }}
      className={classNames(
        "hover:-translate-y-1 hover:cursor-pointer duration-200",
        selected ? styles.selected : styles.non_selected
      )}
    >
      {name}
    </button>
  );
}

DimensionButton.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default DimensionButton;
