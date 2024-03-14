import { Form } from "antd";
import PropTypes from "prop-types";

const validateWhitespace = () => ({
  validator(rule, value, callback) {
    if (value.trim() === "") {
      callback("Input cannot be empty or contain only white spaces!");
    } else {
      callback();
    }
  },
})

const validateConfirmPassword = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error("The new password that you entered does not match!")
    );
  },
});

const validateNewEmail = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("email") === value) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error("The new email that you entered does not match!")
    );
  },
});

const validateConfirmNewPassword = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error("The new password that you entered does not match!")
    );
  },
});


const FORM_TYPES = {
  password: {
    rules: [{ required: true, message: "Please input your password!" }, validateWhitespace],
  },
  confirmPassword: {
    rules: [
      { required: true, message: "Confirm password is not the same as password" },
      validateConfirmPassword,
    ],
  },
  newPassword: {
    rules: [{ required: true, message: "Please input your new password!" }, validateWhitespace],
  },
  confirmNewPassword: {
    rules: [
      { required: true, message: "Confirm new password is not the same as new password" },
      validateConfirmNewPassword,
    ],
  },
  email: {
    rules: [
      { type: 'email', required: true, message: "Please enter a valid email" },
    ]
  },
  confirmNewEmail: {
    rules: [
      { required: true, message: "Confirm email is not the same as email" },
      validateNewEmail,
    ],
  },
  checkbox: {
    rules: [
      {
        validator: (_, value) =>
          value ? Promise.resolve() : Promise.reject(new Error('Please accept agreement')),
      },
    ],
  },
  default: {
    rules: [{ required: false, message: "" }],
  },
  newLetterEmail: {
    rules: [
      { type: 'email', required: true, message: "Please enter a valid email" },
    ]
  },
  firstName: {
    rules: [
      { required: true, message: "Please enter a valid first name" },
    ]
  },
  lastName: {
    rules: [
      { required: true, message: "Please enter a valid last name" },
    ]
  },
  ward: {
    rules: [
      { required: true, message: "Please choose a ward below" },
    ]
  },
  district: {
    rules: [
      { required: true, message: "Please choose a district below" },
    ]
  },
  province: {
    rules: [
      { required: true },
    ]
  },
  detailAddress: {
    rules: [
      { required: true, message: "Please enter a valid address details" },
    ]
  },
  phone: {
    rules: [
      { required: true, message: "Please enter a valid phone" },
    ]
  },
  voucher: {
    rules: [
      { required: false, message: "" },
    ]
  },
};

const FormItem = ({ children, label, name, type, message, required, valuePropName, ...others }) => {
  const customRules = [
    { required: true, message },
    validateWhitespace,
  ];
  return (
    <Form.Item
      label={label ? <span className="text-base text-gray-800 font-semibold mb-[-5px]">{label}</span> : label}
      name={name}
      rules={required ? customRules : FORM_TYPES[type].rules}
      valuePropName={valuePropName && "checked"}
      {...others}
    >
      {children}
    </Form.Item>
  );
};

FormItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.any,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
};

FormItem.defaultProps = {
  label: null,
  required: false,
  message: "Please fill in this field",
  type: "default",
};

export default FormItem;
