import { useMutation } from '@tanstack/react-query';
import { Axios } from 'axios';

class Auth {
    axios: Axios;
    constructor(axios: Axios) {
        this.axios = axios;
    }

    login() {
        return useMutation({
            mutationFn: (data: { nickname: string; password: string }) => {
                return this.axios.post('auth/login', data);
            },
        });
    }

    registration() {
        return useMutation({
            mutationFn: (data: { nickname: string; password: string }) => {
                return this.axios.post('auth/registration', data);
            },
        });
    }

    logout() {
        return useMutation({
            mutationFn: () => this.axios.post('auth/logout'),
        });
    }
}

export default Auth;
