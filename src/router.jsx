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
import StoreLocation from "./pages/StoreLocation";

const Profile = lazy(() => import("@pages/Profile"));
const Products = lazy(() => import("@pages/Products"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const NotFound = lazy(() => import("@pages/NotFound"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Rooms = lazy(() => import("@pages/Rooms"));
const RoomDetail = lazy(() => import("@pages/RoomDetail"));
const RoomsByPlace = lazy(() => import("@pages/RoomsByPlace"));
const ProductDetail = lazy(() => import("@pages/ProductDetail"));

export const PATH = {
  home: "/",
  products: "/products",
  about: "/",
  cart: "/",
  login: "/login",
  register: "/register",
  wishlist: "/wishlist",
  rooms: "/rooms",
  roomDetail: "/room/:id",
  roomByPlace: "/room/position/:slug",
  profile: "/profile",
  stores: "/stores",
  productDetail: '/product-detail'
};

/**
 * Only edit here
 */
const rootLayoutRouterList = {
  layout: <RootLayout />,
  children: [
    {
      path: PATH.home,
      element: <Home />,
    },
    {
      path: PATH.products,
      element: <Products />,
    },
    {
      path: PATH.login,
      element: <Login />,
    },
    {
      path: PATH.register,
      element: <Register />,
    },
    {
      path: PATH.wishlist,
      element: <Wishlist />,
    },
    {
      path: PATH.rooms,
      element: <Rooms />,
    },
    {
      path: PATH.roomByPlace,
      element: <RoomsByPlace />,
    },
    {
      path: PATH.roomDetail,
      element: <RoomDetail />,
    },
    {
      path: PATH.profile,
      element: <Profile />,
    },
    {
      path: PATH.stores,
      element: <StoreLocation />,
    },
    {
      path: PATH.productDetail,
      element: <ProductDetail />,
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
    <Route element={rootLayoutRouterList.layout}>
      {rootLayoutRouterList.children.map((item) => (
        <Route path={item.path} key={item.path} element={item.element} />
      ))}
    </Route>
  )
);
