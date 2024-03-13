import { useGuestStore } from '../stores/useGuestStore';
import useAuth from '../stores/useAuth';
import { get_add_all_wishlist_api } from '../api/wishlistApi';
import { usePost, usePostWithAuth } from './api-hooks';
import { get_auth_login } from '../api/authApi';
import jwtDecode from "jwt-decode";
import { message } from "antd";

export default function useAuthentication() {
    const { setTokens } = useAuth();

  const { wishlist } = useGuestStore();

  const { mutate: addToWishlist } = usePostWithAuth(get_add_all_wishlist_api());

  const { mutate:login } = usePost(
    get_auth_login(),
    undefined,
    (data) => {
      const { access_token, refresh_token } = data.data.metaData;
      const decode = jwtDecode(access_token);
      setTokens(access_token, refresh_token, decode.account_id);

      addToWishlist(wishlist.map((item) => item._id));
    },
    (error) => {
      message.error(error.response.data.error.message);
    }
  );
  
  return {
    login,
  }
}
