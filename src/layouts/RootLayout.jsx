import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import CartSideBar from "@components/CartSideBar"
import AppSuspense from "../components/AppSuspense"

const RootLayout = () => {
  return (
    <div className="font-HelveticaRoman">
      <CartSideBar />
      <Navbar />
      <AppSuspense>
        <Outlet />
      </AppSuspense>
    </div>
  )
}

export default RootLayout