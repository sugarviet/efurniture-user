import CheckoutNavbar from "@components/CheckoutNavbar"
import { Outlet } from "react-router-dom"
import AppSuspense from "@components/AppSuspense"
import CheckoutFooter from "@components/CheckoutFooter"
import CheckoutBottomBar from "@components/CheckoutBottomBar"
import LoginBottomBar from "@components/LoginBottomBar"
import useAuth from "../stores/useAuth"
import { ErrorBoundary } from "react-error-boundary"
import Error from "../pages/Error"

const CheckoutLayout = () => {
  const { accessToken } = useAuth();

  return (
    <ErrorBoundary fallback={<Error />}>
    <div className="font-HelveticaRoman">
      <CheckoutBottomBar />
      {!accessToken && <LoginBottomBar />}
      <CheckoutNavbar />
      <AppSuspense>
        <Outlet />
      </AppSuspense>
      <CheckoutFooter />
    </div>
    </ErrorBoundary>
    
  )
}

export default CheckoutLayout