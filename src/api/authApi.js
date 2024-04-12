const BASE_URL = "http://34.126.181.161:4646/api/v1"
const AUTH_LOGIN = '/auth/login';
const AUTH_REGISTER = '/auth/register';
const AUTH_LOGOUT = '/auth/logout';
const AUTH_REFRESH_TOKEN = 'refresh';


export const get_auth_login = () => AUTH_LOGIN;
export const get_auth_register = () => AUTH_REGISTER;
export const get_auth_logout = () => AUTH_LOGOUT;
export const get_auth_refresh_token = () => `${BASE_URL}/${AUTH_REFRESH_TOKEN}`;
