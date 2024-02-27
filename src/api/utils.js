import axios from "axios";
import Cookies from 'js-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN, CLIENT_ID } from "../constants/token";

const API_URL_DEVELOPMENT = "https://jsonplaceholder.typicode.com";
const API_URL_PRODUCTION = "http://34.126.181.161:4646/api/v1";

const BASE_URL = API_URL_PRODUCTION;

const accessToken = Cookies.get(ACCESS_TOKEN);
const refreshToken = Cookies.get(REFRESH_TOKEN);
const client_id = Cookies.get(CLIENT_ID);

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

export const API = axios.create({
    baseURL: BASE_URL,
})

export const USER_API = axios.create({
    baseURL: BASE_URL,
});

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
)

USER_API.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        // if (error.response && error.response.status === 401) {
        //     alert("Logout")
        // }
        return Promise.reject(error);
    }
);