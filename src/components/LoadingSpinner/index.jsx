import { Spin } from "antd";
import { createPortal } from 'react-dom';

const LoadingSpinner = () => {
  return (
    <>
      {createPortal(
        <Spin
          size="large"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        />,
        document.body
      )}
    </>
  )
}

export default LoadingSpinner