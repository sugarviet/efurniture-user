// import './App.css'

import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { Toaster } from "sonner";
import Error from "./pages/Error";
import { ErrorBoundary } from "react-error-boundary";


function App() {

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
