import axios from "axios";

const API_URL_DEVELOPMENT = "https://jsonplaceholder.typicode.com";
const API_URL_PRODUCTION = "http://34.126.181.161:4646/api/v1";

const BASE_URL = API_URL_PRODUCTION;

export const API = axios.create({
    baseURL: BASE_URL,
})

export const USER_API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

USER_API.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            alert("Logout")
        }
        return Promise.reject(error);
    }
);