import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="font-HelveticaRoman">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default RootLayout