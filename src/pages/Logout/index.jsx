import { useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import useAuth from "../../stores/useAuth";
import useNavigation from "../../hooks/useNavigation";
import { useOrderStore } from "../../stores/useGuestOrderStore";

function Logout() {
  const { clearTokens } = useAuth();
  const { go_to_login } = useNavigation();
  const { reset } = useOrderStore();

  useEffect(() => {
    reset()
    clearTokens();
    go_to_login();
  }, []);

  return <LoadingSpinner />;
}

export default Logout;
