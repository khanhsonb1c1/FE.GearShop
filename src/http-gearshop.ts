import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { authStore } from "../src/store/auth"

async function defaultHeaders() {
    const defaultHeaders = {
        'token': await authStore().token,
        Accept: "application/json",
    };
    return defaultHeaders;

}



const gearshop: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_GEARSHOP,
});
gearshop.interceptors.request.use(async function (config: AxiosRequestConfig) {
    config.headers = await defaultHeaders();
    return config;
});


export { gearshop };
