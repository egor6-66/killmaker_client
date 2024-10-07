import axiosBase, { AxiosRequestConfig } from 'axios';

import Auth from './auth';
import Users from './users';

class Api {
    axios = axiosBase.create({
        baseURL: 'http://localhost/api',
    } as AxiosRequestConfig);

    auth = new Auth(this.axios);
    user = new Users(this.axios);
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
                const path = error.request.responseURL;

                if (error.response.status === 401 && error.config && !error.config._isRetry && !path.includes('login') && !path.includes('registration')) {
                    error.config._isRetry = true;

                    try {
                        await this.axios.post('auth/refreshToken');

                        return await this.axios.request(originalRequest);
                    } catch (err) {
                        window.location.href = '/auth';
                    }
                }

                return Promise.reject(error);
            }
        );
    }
}

export default new Api();
