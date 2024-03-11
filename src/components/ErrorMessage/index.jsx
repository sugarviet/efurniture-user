import { WarningOutlined } from "@ant-design/icons";

function ErrorMessage({ message }) {
  return (
    <div className="flex items-center">
      <WarningOutlined className="w-6 h-6 text-rose-500" />
      <span className="text-rose-500 text-sm font-semibold">{message}</span>
    </div>
  );
}

export default ErrorMessage;
