import axios from "axios";
import Cookies from "js-cookie";

const API_URL_DEVELOPMENT = "https://jsonplaceholder.typicode.com";
const API_URL_PRODUCTION = "http://34.126.181.161:4646/api/v1";

const BASE_URL = API_URL_PRODUCTION;

export const API = axios.create({
    baseURL: BASE_URL,
})

export const USER_API = axios.create({
    baseURL: BASE_URL,
});

const cookies = {
    accessToken: {
        key: "x-client-accesstoken",
        value: Cookies.get('access_token')
    },
    refreshToken: {
        key: "x-client-refreshtoken",
        value: Cookies.get('refresh_token')
    },
    accountId: {
        key: "x-client-id",
        value: Cookies.get('account_id')
    },
}

USER_API.interceptors.request.use(
    (config) => {
        config.headers[cookies['accessToken'].key] = cookies['accessToken'].value;
        config.headers[cookies['refreshToken'].key] = cookies['refreshToken'].value;
        config.headers[cookies['accountId'].key] = cookies['accountId'].value;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);