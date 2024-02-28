import { message } from "antd";
function useNotification() {
  const success_message = (msg) => {
    message.success(msg);
  };
  const error_message = (msg) => {
    message.error(msg);
  };
  return {
    success_message,
    error_message,
  };
}

export default useNotification;
