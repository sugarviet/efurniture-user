import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import CartSideBar from "@components/CartSideBar"
import AppSuspense from "../components/AppSuspense"
import  Footer  from "@components/Footer"

const RootLayout = () => {
  return (
    <div className="font-HelveticaRoman">
      <CartSideBar />
      <Navbar />
      <AppSuspense>
        <Outlet />
      </AppSuspense>
      <Footer/>
    </div>
  )
}

export default RootLayout