import { useMutation, useQuery } from '@tanstack/react-query';
import { Axios } from 'axios';

import { MapsInterfaces } from '@/interfaces';
class Maps {
    axios: Axios;
    constructor(axios: Axios) {
        this.axios = axios;
    }

    getAll() {
        return useQuery({
            queryKey: ['all-maps'],
            queryFn: () => {
                return this.axios.get<MapsInterfaces.IMap[]>('game-maps/all');
            },
            staleTime: Infinity,
        });
    }
}

export default Maps;
