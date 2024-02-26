import AppInput from "@components/ui/AppInput";

import FormItem from "../FormItem";
import PropTypes from "prop-types";

const FormInput = ({ label, name, initialValue, placeholder, type, required, message, inputType, className, disabled }) => {
  return (
    <FormItem initialValue={initialValue} label={label} name={name} type={type} required={required} message={message}>
      <AppInput placeholder={placeholder} disabled={disabled} className={className} inputType={inputType} />
    </FormItem>
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.any,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  inputType: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

FormInput.defaultProps = {
  label: null,
  inputType: 'text',
  required: false,
  message: "Please fill in this field",
  type: "default",
  initialValue: "",
  disabled: false,
};


export default FormInput;
