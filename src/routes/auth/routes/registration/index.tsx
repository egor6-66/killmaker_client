import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@/components';
import { engineApi } from '@/utils';

import styles from './styles.module.scss';

const Registration = () => {
    const navigate = useNavigate();

    return (
        <Box
            className={styles.wrapper}
            onClick={() => {
                navigate('/main');
                engineApi.setLocation(1);
            }}
        >
            {' '}
            <Button>main</Button>
        </Box>
    );
};

export default Registration;
