import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import CartSideBar from "@components/CartSideBar"

const RootLayout = () => {
  return (
    <div className="font-HelveticaRoman">
      <CartSideBar />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default RootLayout