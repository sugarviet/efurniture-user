/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "@layouts/RootLayout";

// Pages
import Home from "@pages/Home";
const Products = lazy(() => import("@pages/Products"))
const Wishlist = lazy(() => import("@pages/Wishlist"))
const NotFound = lazy(() => import("@pages/NotFound"))
const Login = lazy(() => import("@pages/Login"))
const Register = lazy(() => import("@pages/Register"))
const Rooms = lazy(() => import("@pages/Rooms"))
const RoomDetail = lazy(() => import("@pages/RoomDetail"))
const RoomsByPlace = lazy(() => import("@pages/RoomsByPlace"))



const paths = {
  base: "/",
  products: "/products",
  about: "/",
  cart: "/",
  login: "/login",
  register: "/register",
  wishlist: '/wishlist',
  rooms: '/rooms',
  roomDetail: '/room/:id',
  roomByPlace: '/room/position/:slug',
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
    {
      path: paths.wishlist,
      element: <Wishlist />,
    },
    {
      path: paths.rooms,
      element: <Rooms />,
    },
    {
      path: paths.roomByPlace,
      element: <RoomsByPlace />,
    },
    {
      path: paths.roomDetail,
      element: <RoomDetail />,
    },
    {
      path: "*",
      element: <NotFound />,
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
