import axios from "axios"
import { password, username } from "./hono-helpers";

const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://auraworks-company-website.vercel.app"

export const axiosInstance = axios.create({
    baseURL: `${baseURL}/api`
})

// Add request interceptor to add headers
axiosInstance.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Accept'] = 'application/json';

        config.auth = {
            username,
            password
        };

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



