import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "@layouts/RootLayout";
import Home from "@pages/Home";
import Products from "@pages/Products";
import Login from "@pages/Login";
import Register from "@pages/Register";

const paths = {
  base: "/",
  products: "/products",
  about: "/",
  cart: "/",
  login: "/login",
  register: "/register",
};

/**
 * Only edit here
 */
const rootLayoutRouterList = {
  layout: <RootLayout />,
  path: paths.base,
  children: [
    {
      path: paths.base,
      element: <Home />,
    },
    {
      path: paths.products,
      element: <Products />,
    },
    {
      path: paths.login,
      element: <Login />,
    },
    {
      path: paths.register,
      element: <Register />,
    },
  ],
};

/**
 * Do not touch this
 */
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={rootLayoutRouterList.layout}
      path={rootLayoutRouterList.path}
    >
      {rootLayoutRouterList.children.map((item) => (
        <Route path={item.path} key={item.path} element={item.element} />
      ))}
    </Route>
  )
);
