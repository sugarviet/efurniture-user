/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@layouts/RootLayout";
import CheckoutLayout from "@layouts/CheckoutLayout";

// Pages
import Home from "@pages/Home";

const Profile = lazy(() => import("@pages/Profile"));
const StoreLocation = lazy(() => import("@pages/StoreLocation"));
const Products = lazy(() => import("@pages/Products"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const NotFound = lazy(() => import("@pages/NotFound"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Rooms = lazy(() => import("@pages/Rooms"));
const RoomDetail = lazy(() => import("@pages/RoomDetail"));
const RoomsByPlace = lazy(() => import("@pages/RoomsByPlace"));
const ProductDetail = lazy(() => import("@pages/ProductDetail"));
const Checkout = lazy(() => import("@pages/Checkout"));
const Search = lazy(() => import("@pages/Search"));

export const PATH = {
  home: "/",
  productByType: "/products/:type",
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
  productDetail: "/product-detail",
  checkout: "/checkout",
  productBySubType: "/products/:type/:subtype",
  search: "/search",
};

export const routers = createBrowserRouter([
  {
    path: PATH.home,
    element: <RootLayout />,
    children: [
      {
        path: PATH.home,
        element: <Home />,
      },
      {
        path: PATH.productByType,
        element: <Products />,
      },
      {
        path: PATH.productBySubType,
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
        path: PATH.productDetail,
        element: <ProductDetail />,
      },
      {
        path: PATH.stores,
        element: <StoreLocation />,
      },
      {
        path: PATH.search,
        element: <Search />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: PATH.checkout,
    element: <CheckoutLayout />,
    children: [
      {
        path: PATH.checkout,
        element: <Checkout />,
      },
    ],
  },
]);
