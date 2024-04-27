// import './App.css'

import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { Toaster } from "sonner";
import Error from "./pages/Error";
import { ErrorBoundary } from "react-error-boundary";
import useAuth from "./stores/useAuth";
import { useEffect } from "react";
import useSocket from "./hooks/useSocket";

function App() {
  const { accessToken } = useAuth();
  const { subcribeToLoginSocket } = useSocket();
  useEffect(() => {
    if (accessToken) {
      console.log("Hi");
      subcribeToLoginSocket();
    }
  }, [accessToken]);
  return (
    <>
      <ErrorBoundary fallback={<Error />}>
        <Toaster closeButton position="bottom-left" />
        <RouterProvider router={routers} />
      </ErrorBoundary>
    </>
  );
}

export default App;
