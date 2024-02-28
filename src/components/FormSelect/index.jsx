import Proptypes from "prop-types";
import FormItem from "../FormItem";
import AppSelect from "../ui/AppSelect";

const FormSelect = ({ label, name, data, placeholder, type, required, message, className, disabled, value }) => {
  return (
    <FormItem label={label} name={name} type={type} required={required} message={message}>
      <AppSelect placeholder={placeholder} disabled={disabled} className={className} data={data} value={value}/>
    </FormItem>
  )
}

FormSelect.propTypes = {
    placeholder: Proptypes.string,
    label: Proptypes.string,
    name: Proptypes.any,
    type: Proptypes.string,
    data: Proptypes.array,
    required: Proptypes.bool,
    message: Proptypes.string,
    className: Proptypes.string,
    disabled: Proptypes.bool,
    value: Proptypes.string,
  };
  
  FormSelect.defaultProps = {
    label: null,
    inputType: 'text',
    required: false,
    message: "Please fill in this field",
    type: "default",
    initialValue: "",
    disabled: false,
  };
  

export default FormSelect