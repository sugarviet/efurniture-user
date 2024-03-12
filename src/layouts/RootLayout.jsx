import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import CartSideBar from '../components/CartSidebar'
import AppSuspense from "../components/AppSuspense"
import Footer from "@components/Footer"
import { withGuestCart } from "../hocs/withGuestCart"
import { withUserCart } from "../hocs/withUserCart"
import useAuth from "../stores/useAuth"
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import useSwitchTab from "../pages/Checkout/hooks/useSwitchTab"

const GuestCartSideBar = withGuestCart(CartSideBar)
const UserCartSideBar = withUserCart(CartSideBar)


const RootLayout = () => {

  const { accessToken } = useAuth();

  const { activeTab, handleChangeTab } = useSwitchTab();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/checkout') {
      handleChangeTab("billing")
    }
  }, [activeTab]);

  return (
    <div className="font-HelveticaRoman">
      {accessToken ? <UserCartSideBar /> : <GuestCartSideBar />}
      <Navbar />
      <AppSuspense>
        <Outlet />
      </AppSuspense>
      <Footer />
    </div>
  )
}

export default RootLayout