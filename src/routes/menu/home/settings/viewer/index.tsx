import React from 'react';

import { Box } from '@/components';

import styles from './styles.module.scss';

const Viewer = () => {
    return (
        <Box className={styles.wrapper} enableAnimation>
            IN DEV
        </Box>
    );
};

export default Viewer;
