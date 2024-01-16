import PropTypes from "prop-types";
import styles from "./DimensionButton.module.css";

function DimensionButton(props) {
  const { onClick, selected, name } = props;

  return (
    <button
      onClick={onClick}
      className={selected ? styles.selected : styles.non_selected}
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
