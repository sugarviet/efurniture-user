import FormItem from "../FormItem";
import PropTypes from "prop-types";

const FormCheckbox = ({ label, name, type, required, message, className }) => {
  return (
    <FormItem
      label={label}
      name={name}
      type={type}
      required={required}
      message={message}
    >
      <input
        className={`${"furniture-checkbox border-[0.125rem] border-[#5a7468] checked:bg-[#5a7468]"} ${className}`}
        type="checkbox"
      ></input>
    
    </FormItem>
  );
};

FormCheckbox.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.any,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  inputType: PropTypes.string,
  className: PropTypes.string,
};

FormCheckbox.defaultProps = {
  label: null,
  inputType: "text",
  required: false,
  message: "Please fill in this field",
  type: "default",
};

export default FormCheckbox;
