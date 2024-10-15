import React, { useState } from 'react';

import Api from '@/api';
import { Box, Button, Input } from '@/components';
import { engineApi } from '@/utils';

import styles from './styles.module.scss';

const CreateServer = () => {
    const password = Input.use({ cut: /\s/, attrs: { placeholder: 'PASSWORD' } });
    const create = Api.server.create();
    const [a, seta] = useState(true);

    const handleCreateServer = () => {
        // create.mutate({ name: 'addwad', mapId: 1 });
        seta(true);
        engineApi.goToLevel(a ? 1 : 0);
        seta(false);
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
