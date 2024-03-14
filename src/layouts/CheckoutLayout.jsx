import CheckoutNavbar from "@components/CheckoutNavbar"
import { Outlet } from "react-router-dom"
import AppSuspense from "@components/AppSuspense"
import CheckoutFooter from "@components/CheckoutFooter"
import CheckoutBottomBar from "@components/CheckoutBottomBar"
import LoginBottomBar from "@components/LoginBottomBar"
import useAuth from "../stores/useAuth"

const RootLayout = () => {
  const { accessToken } = useAuth();

  return (
    <div className="font-HelveticaRoman">
      <CheckoutBottomBar />
      {!accessToken && <LoginBottomBar />}
      <CheckoutNavbar />
      <AppSuspense>
        <Outlet />
      </AppSuspense>
      <CheckoutFooter />
    </div>
  )
}

export default RootLayout