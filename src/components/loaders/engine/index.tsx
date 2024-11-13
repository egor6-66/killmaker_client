import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Box, Image } from '@/components';

import styles from './styles.module.scss';

const EngineLoading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        window.engine.engineLoading = (current, total) => {
            if (current && total) {
                setProgress(Math.ceil((current / total) * 100));
            }
        };
    }, []);

    return (
        <Box enableAnimation className={styles.wrapper}>
            <div className={styles.body}>
                <motion.div
                    className={styles.overlay}
                    initial={{ width: '100%' }}
                    animate={{ width: `${100 - progress}%` }}
                    transition={{ duration: 3 }}
                ></motion.div>
                <Image full src={`${process.env.STORAGE_URL}/assets/logo_1.png`} />
            </div>
        </Box>
    );
};

export default EngineLoading;
