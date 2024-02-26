import {create} from 'zustand';
import Cookies from 'js-cookie';

const useAuth = create((set) => ({
  accessToken: Cookies.get('access_token'),
  refreshToken: null,
  setTokens: (accessToken, refreshToken) => {
    set({ accessToken, refreshToken });
    Cookies.set('access_token', accessToken);
    Cookies.set('refresh_token', refreshToken);
  },
  clearTokens: () => {
    set({ accessToken: null, refreshToken: null });
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
  },
}));

export default useAuth;

