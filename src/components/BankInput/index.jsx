import { useState } from "react";

const BANK_INPUT_TYPE = {
  account_number: {
    label: "Account number",
    input_type: "number",
    placeholder: "Enter your account number",
  },
  account_name: {
    label: "Account name",
    input_type: "string",
    placeholder: "Your account name",
    read_only: true,
  },
};

function BankInput({ type, onBlur = () => {}, onChange = () => {}, value }) {
  const { label, input_type, placeholder, read_only } = BANK_INPUT_TYPE[type];

  return (
    <div className="flex flex-col">
      <div className="text-sm font-semibold mb-2">{label}</div>
      <input
        readOnly={read_only}
        type={input_type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={(e) => onBlur(e.target.value)}
        className="furniture-input"
      />
    </div>
  );
}

export default BankInput;
