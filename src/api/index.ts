import axiosBase, { AxiosRequestConfig } from 'axios';

import Auth from './auth';
import Maps from './maps';
import Server from './server';
import Users from './users';

const axiosInstance = axiosBase.create({
    baseURL: 'http://localhost/api',
} as AxiosRequestConfig);

class Api {
    axios = axiosInstance;
    auth = new Auth(this.axios);
    user = new Users(this.axios);
    server = new Server(this.axios);
    maps = new Maps(this.axios);

    constructor() {
        this.interceptor();
    }

    private interceptor() {
        this.axios.interceptors.response.use(
            (config) => {
                return config;
            },
            async (error) => {
                const originalRequest = error.config;

                if (error.response.status === 401 && error.config && !error.response?.data?.invalidRefresh && !window.location.pathname.includes('auth')) {
                    try {
                        const res = await this.axios.post('auth/refreshToken');

                        if (res.status === 200) {
                            return await this.axios.request(originalRequest);
                        }
                    } catch (err) {}
                }

                return Promise.reject(error);
            }
        );
    }
}

export { axiosBase, axiosInstance };
export default new Api();
