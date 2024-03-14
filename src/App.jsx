// import './App.css'

import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
