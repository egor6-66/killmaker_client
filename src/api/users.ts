import { useMutation, useQuery } from '@tanstack/react-query';
import { Axios } from 'axios';

class Users {
    axios: Axios;
    constructor(axios: Axios) {
        this.axios = axios;
    }

    getViewer() {
        return useQuery({
            queryKey: ['viewer'],
            queryFn: () => this.axios.get('users/viewer'),
        });
    }
}

export default Users;
