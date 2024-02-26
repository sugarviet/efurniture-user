import Proptypes from "prop-types";

const inputTypes = {
    primary: 'furniture-input text-[16px] '
}

const AppInput = ({ onClick, onChange, className, type, inputType, disabled, ...others }) => {
  return <input type={inputType} className={`${inputTypes[type]} ${className}`} onClick={onClick} onChange={onChange} disabled={disabled} {...others}/>;
};

AppInput.propTypes = {
  onClick: Proptypes.func,
  onChange: Proptypes.func,
  className: Proptypes.string,
  type: Proptypes.string,
  inputType: Proptypes.string,
  placeholder: Proptypes.string,
  disabled: Proptypes.bool,

};

AppInput.defaultProps = {
    onClick: null,
    onChange: null,
    className: "",
    type: "primary",
    inputType: "text",
    disabled: false,
  };

export default AppInput;
