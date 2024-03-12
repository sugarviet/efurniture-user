import { useState } from 'react';
import PropTypes from 'prop-types';

const inputTypes = {
  primary: 'furniture-input text-[16px]',
};

const AppInput = ({ value, onChange, className, type, inputType, placeholder, disabled, ...others }) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type={inputType}
      className={`${inputTypes[type]} ${className}`}
      value={value !== undefined ? value : inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      {...others}
    />
  );
};

AppInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

AppInput.defaultProps = {
  value: '',
  onChange: null,
  className: '',
  type: 'primary',
  inputType: 'text',
  placeholder: '',
  disabled: false,
};

export default AppInput;
