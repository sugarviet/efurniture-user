import {create} from 'zustand';
import Cookies from 'js-cookie';

const useAuth = create((set) => ({
  accessToken: Cookies.get('access_token'),
  refreshToken: Cookies.get('refresh_token'),
  accountId: Cookies.get('account_id'),
  setTokens: (accessToken, refreshToken, accountId) => {
    set({ accessToken, refreshToken, accountId });
    Cookies.set('access_token', accessToken);
    Cookies.set('refresh_token', refreshToken);
    Cookies.set('account_id', accountId);

  },
  clearTokens: () => {
    set({ accessToken: null, refreshToken: null, accountId: null });
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    Cookies.remove('account_id');
  },
}));

export default useAuth;

