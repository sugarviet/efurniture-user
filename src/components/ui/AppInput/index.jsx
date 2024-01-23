import Proptypes from "prop-types";

const inputTypes = {
    primary: 'furniture-input'
}

const AppInput = ({ onClick, onChange, className, type, inputType, ...others }) => {
  return <input type={inputType} className={`${inputTypes[type]} ${className}`} onClick={onClick} onChange={onChange} {...others}/>;
};

AppInput.propTypes = {
  onClick: Proptypes.func,
  onChange: Proptypes.func,
  className: Proptypes.string,
  type: Proptypes.string,
  inputType: Proptypes.string,
  placeholder: Proptypes.string,

};

AppInput.defaultProps = {
    onClick: null,
    onChange: null,
    className: "",
    type: "primary",
    inputType: "text"
  };

export default AppInput;
