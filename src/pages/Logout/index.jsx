import { useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import useAuth from "../../stores/useAuth";
import useNavigation from "../../hooks/useNavigation";

function Logout() {
  const { clearTokens } = useAuth();
  const { go_to_login } = useNavigation();

  useEffect(() => {
    clearTokens();
    go_to_login();
  }, []);

  return <LoadingSpinner />;
}

export default Logout;
