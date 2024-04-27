import { Modal } from "antd";
import useAuth from "../stores/useAuth";
import useSocketStore from "../stores/useSocketStore";

const useSocket = () => {
  const { accountId, clearTokens } = useAuth();
  const { socket } = useSocketStore();

  const loginSocket = () => {
    socket.emit("login-user", accountId);
  };

  const subcribeToLoginSocket = () => {
    loginSocket();
    socket.on("checkLogin", (arg) => {
        console.log(arg)
        Modal.confirm({
            title: "Warning",
            content: "Someone is logging into your account",
            okButtonProps: { style: { backgroundColor: "black" } }, 
            cancelButtonProps: { style: { display: "none" } }, 
            onOk: () => {
              clearTokens();
              window.location.replace("/login");
            },
            
          });
    });
  };

  return {
    subcribeToLoginSocket,
    socket,
  };
};

export default useSocket;
