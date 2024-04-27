import CheckoutNavbar from "@components/CheckoutNavbar"
import { Outlet } from "react-router-dom"
import AppSuspense from "@components/AppSuspense"
import CheckoutFooter from "@components/CheckoutFooter"
import CheckoutBottomBar from "@components/CheckoutBottomBar"
import LoginBottomBar from "@components/LoginBottomBar"
import useAuth from "../stores/useAuth"
import { ErrorBoundary } from "react-error-boundary"
import Error from "../pages/Error"
import { useEffect } from "react"
import useSocket from "../hooks/useSocket"

const CheckoutLayout = () => {
  const { accessToken } = useAuth();
  const { subcribeToLoginSocket } = useSocket();

  useEffect(()=>{
    if(accessToken){
      subcribeToLoginSocket();
    }

  }, [accessToken])
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