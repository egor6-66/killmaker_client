import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Api from '@/api';
import { Box, Button, Input } from '@/components';
import { engineApi } from '@/utils';

import styles from './styles.module.scss';

const CreateServer = () => {
    const password = Input.use({ cut: /\s/, attrs: { placeholder: 'PASSWORD' } });
    const create = Api.server.create();
    const navigate = useNavigate();

    const handleCreateServer = () => {
        // create.mutate({ name: 'addwad', mapId: 1 });
        engineApi.goToLevel(1);
        navigate('/battlefield/1');
    };

    return (
        <Box className={styles.wrapper}>
            <Box direction={'vertical'} gap={2}>
                <Input attrs={{ ...password.inputAttrs }} errorMessage={password.errorMessage} />
            </Box>

            <Button onClick={handleCreateServer}>{'ВПЕРЕД'}</Button>
        </Box>
    );
};

export default CreateServer;
