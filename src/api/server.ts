import { useMutation, useQuery } from '@tanstack/react-query';
import { Axios } from 'axios';

class Server {
    axios: Axios;
    constructor(axios: Axios) {
        this.axios = axios;
    }

    create() {
        return useMutation({
            mutationFn: (data: { name: string; mapId: number }) => {
                return this.axios.post('server/create', data);
            },
        });
    }

    getAll() {
        return useQuery({
            queryKey: ['all'],
            queryFn: () => {
                return this.axios.get('server/all');
            },
        });
    }
}

export default Server;
