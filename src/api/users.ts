import { useMutation, useQuery } from '@tanstack/react-query';
import { Axios } from 'axios';

import { UserInterfaces } from '@/interfaces';
class Users {
    axios: Axios;
    constructor(axios: Axios) {
        this.axios = axios;
    }

    getViewer() {
        return useQuery({
            queryKey: ['viewer'],
            queryFn: () => this.axios.get<UserInterfaces.IUser>('users/viewer'),
            staleTime: Infinity,
        });
    }
}

export default Users;
