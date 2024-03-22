import { useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import useAuthentication from "../../hooks/useAuthentication";

function Logout() {
  const { logout } = useAuthentication();

  useEffect(() => {
    logout();
  }, []);

  return <LoadingSpinner />;
}

export default Logout;
