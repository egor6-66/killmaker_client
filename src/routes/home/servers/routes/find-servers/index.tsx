import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Api from '@/api';
import { Box } from '@/components';

import styles from './styles.module.scss';

const FindServers = () => {
    const { data: getAllServers } = Api.server.getAll();
    console.log(getAllServers?.data);
    const navigate = useNavigate();

    return (
        <Box bg className={styles.wrapper}>
            {getAllServers?.data.map((i) => (
                <div key={i.id} onClick={() => navigate(`/arena/${i.id}`)}>
                    {i.name}
                </div>
            ))}
        </Box>
    );
};

export default FindServers;
