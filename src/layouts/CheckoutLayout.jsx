import CheckoutNavbar from "@components/CheckoutNavbar"
import { Outlet } from "react-router-dom"
import AppSuspense from "@components/AppSuspense"
import  CheckoutFooter  from "@components/CheckoutFooter"
import CheckoutBottomBar from "@components/CheckoutBottomBar"
import LoginBottomBar from "@components/LoginBottomBar"
const RootLayout = () => {
  return (
    <div className="font-HelveticaRoman">
      <CheckoutBottomBar />
      <LoginBottomBar />
      <CheckoutNavbar />
      <AppSuspense>
        <Outlet />
      </AppSuspense>
      <CheckoutFooter/>
    </div>
  )
}

export default RootLayout