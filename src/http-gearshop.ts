import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

async function defaultHeaders() {
    const defaultHeaders = {

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
