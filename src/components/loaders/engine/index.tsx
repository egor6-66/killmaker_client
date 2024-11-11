import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { Box } from '@/components';

import styles from './styles.module.scss';

interface IProps {
    visible: boolean;
}

const EngineLoading = (props: IProps) => {
    const { visible } = props;

    return (
        // <AnimatePresence initial={false}>
        //     {visible && (
        <Box enableAnimation className={styles.wrapper}>
            <img src={'http://localhost/storage/assets/logo_1.png'} alt={''} />
        </Box>
        //     )}
        // </AnimatePresence>
    );
};

export default EngineLoading;
