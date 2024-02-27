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

USER_API.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            try {
                const refreshResponse = await axios.post(`${BASE_URL}/refresh`);
                const accessTokenRes = refreshResponse.data.accessToken;
                const refreshTokenRes = refreshResponse.data.refreshToken;

                originalRequest.headers[cookies['accessToken'].key] = Cookies.set("access_token", accessTokenRes);
                originalRequest.headers[cookies['refreshToken'].key] = Cookies.set("refresh_token", refreshTokenRes);
                originalRequest.headers[cookies['accountId'].key] = accountId;

                return axios(originalRequest);
            } catch (error) {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);