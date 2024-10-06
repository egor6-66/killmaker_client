import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@/components';
import { engineApi } from '@/utils';

import styles from './styles.module.scss';

const Login = () => {
    const navigate = useNavigate();

    return (
        <Box className={styles.wrapper}>
            <Button
                onClick={() => {
                    navigate('/main');
                    engineApi.setLocation(1);
                }}
            >
                main
            </Button>
        </Box>
    );
};

export default Login;
