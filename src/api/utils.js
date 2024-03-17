import axios from "axios";
import Cookies from 'js-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN, CLIENT_ID } from "../constants/token";
import { get_auth_logout, get_auth_refresh_token } from "./authApi";

const API_URL_DEVELOPMENT = "https://jsonplaceholder.typicode.com";
const API_URL_PRODUCTION = "http://34.126.181.161:4646/api/v1";
import { toast } from "sonner";
import { sleep } from "../utils/sleep";
const BANKING_URL_TEST = "https://oauth.casso.vn/v2";
const BANKING_API_KEY = "AK_CS.efb29200e36a11ee9d413757570d4de8.8hDyi7AgyeMQPZYlCZ0NKqluhqJdeYGTSsJhmthuVoYJ6F9AIjHv7znMssbmKGxgYRU94oM8"

const BASE_URL = API_URL_PRODUCTION;
const BANKING_URL = BANKING_URL_TEST;


export const API = axios.create({
    baseURL: BASE_URL,
})

export const USER_API = axios.create({
    baseURL: BASE_URL,
});

export const BANKING_API = axios.create({
    baseURL: BANKING_URL,
});

const cookies = () => ({
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
})

const refreshTokenAndRetry = async (config) => {
    try {
        const refreshResponse = await axios.post(get_auth_refresh_token, {
            refresh_token: cookies().refreshToken.value,
            account_id: cookies().accountId.value
        });
        const accessTokenRes = refreshResponse.data.accessToken;
        const refreshTokenRes = refreshResponse.data.refreshToken;

        Cookies.set("access_token", accessTokenRes);
        Cookies.set("refresh_token", refreshTokenRes);

        config.headers[cookies().accessToken.key] = accessTokenRes;
        config.headers[cookies().refreshToken.key] = refreshTokenRes;
        config.headers[cookies().accountId.key] = cookies().accountId.value;

        return axios(config);
    } catch (error) {
        return Promise.reject(error);
    }
};

const logoutUser = async () => {
    try {
        const logoutResponse = await axios.post(get_auth_logout, {
            access_token: cookies().accessToken.value,
            refresh_token: cookies().refreshToken.value,
            account_id: cookies().accountId.value
        });
        toast.error('Someone is logging into your account')
        await sleep(2000);
        window.location.replace("/login");
    } catch (error) {
        return Promise.reject(error);
    }
}

const errorHandler = async (error) => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                return refreshTokenAndRetry(error.config);
            case 403:
                console.error('Forbidden:', error.response.data);
                break;
            case 404:
                toast.error('The requested does not exist');
                break;
            case 409:
                return logoutUser(error.config);
            case 500:
                toast.error('Something went wrong');
                break;
            default:
                toast.error('Error:', error.response.data);
        }
    } else if (error.request) {
        toast.error('Request made but no response received:', error.request);
    } else {
        toast.error('Error during request setup:', error.message);
    }
    return Promise.reject(error);
};


USER_API.interceptors.request.use(
    (config) => {
        config.headers[cookies()['accessToken'].key] = cookies()['accessToken'].value;
        config.headers[cookies()['refreshToken'].key] = cookies()['refreshToken'].value;
        config.headers[cookies()['accountId'].key] = cookies()['accountId'].value;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    (response) => {
        return response
    },
    errorHandler
);

USER_API.interceptors.response.use(
    (response) => {
        return response
    },
    errorHandler
);

BANKING_API.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = `Apikey ${BANKING_API_KEY}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);