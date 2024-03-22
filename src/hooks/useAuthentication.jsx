import { useGuestStore } from "../stores/useGuestStore";
import useAuth from "../stores/useAuth";
import { get_add_all_wishlist_api } from "../api/wishlistApi";
import { usePost, usePostAuth, usePostWithAuth } from "./api-hooks";
import { get_auth_login, get_auth_logout } from "../api/authApi";
import jwtDecode from "jwt-decode";
import { message } from "antd";
import { useOrderStore } from "../stores/useGuestOrderStore";
import useNavigation from "./useNavigation";

export default function useAuthentication() {
  const { setTokens, clearTokens } = useAuth();

  const { wishlist } = useGuestStore();

  const { reset } = useOrderStore();
  const { go_to_login } = useNavigation();

  const { mutate: addToWishlist } = usePostWithAuth(get_add_all_wishlist_api());

  const { mutate: login } = usePost(
    get_auth_login(),
    undefined,
    (data) => {
      reset();
      const { access_token, refresh_token } = data.data.metaData;
      const decode = jwtDecode(access_token);
      setTokens(access_token, refresh_token, decode.account_id);
      addToWishlist(wishlist.map((item) => item._id));
    },
    (error) => {
      message.error(error.response.data.error.message);
    }
  );

  const { mutate: logout } = usePostAuth(get_auth_logout(), undefined, () => {
    clearTokens();
    reset();
    go_to_login();
  });

  return {
    login,
    logout,
  };
}
