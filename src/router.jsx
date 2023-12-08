import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "@layouts/RootLayout";
import Home from "@pages/Home";
import Products from "@pages/Products";

const PATH = {
  base: "/",
  products: "/products",
  about: "/",
  cart: "/",
  login: "/login",
};

/**
 * Only edit here
 */
const rootLayoutRouterList = {
  layout: <RootLayout />,
  path: PATH.base,
  children: [
    {
      path: PATH.base,
      element: <Home />,
    },
    {
      path: PATH.products,
      element: <Products />,
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
