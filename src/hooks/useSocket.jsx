import { Modal } from "antd";
import useAuth from "../stores/useAuth";
import useSocketStore from "../stores/useSocketStore";

const useSocket = () => {
  const { clearTokens } = useAuth();
  const { socket } = useSocketStore();

  const loginSocket = (accountId) => {
    socket.emit("login-user", accountId);
  };

  const subcribeToLoginSocket = () => {
      socket.on("checkLogin", (arg) => {
          console.log(arg)
          Modal.confirm({
              title: "Warning",
              content: "Your account has been logged in from another location",
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
    loginSocket
  };
};

export default useSocket;
