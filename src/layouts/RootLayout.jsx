import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import CartSideBar from "@components/CartSideBar"
import AppSuspense from "../components/AppSuspense"
import  Footer  from "@components/Footer"
import { withGuestCart } from "../hocs/withGuestCart"
import { withUserCart } from "../hocs/withUserCart"
import useAuth from "../stores/useAuth"

const GuestCartSideBar = withGuestCart(CartSideBar)
const UserCartSideBar = withUserCart(CartSideBar)


const RootLayout = () => {
  const {accessToken} = useAuth();
  return (
    <div className="font-HelveticaRoman">
      {accessToken ? <UserCartSideBar/> : <GuestCartSideBar/>}
      <Navbar />
      <AppSuspense>
        <Outlet />
      </AppSuspense>
      <Footer/>
    </div>
  )
}

export default RootLayout