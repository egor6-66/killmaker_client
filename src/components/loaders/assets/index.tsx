import React, { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Box } from '@/components';

import styles from './styles.module.scss';

interface IProps {
    visible: boolean;
    assetsLoadingPercent: number;
}

const AssetsLoading = (props: IProps) => {
    const { visible, assetsLoadingPercent } = props;
    const progress = Math.ceil(assetsLoadingPercent);

    const draw = useMemo(() => {
        return {
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
                pathLength: progress,
                opacity: 1,
                transition: {
                    pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
                    opacity: { duration: 0.01 },
                },
            },
        };
    }, [progress]);

    return (
        <AnimatePresence>
            {visible && (
                <Box enableAnimation className={styles.wrapper}>
                    {/*<motion.svg className={styles.loader} initial="hidden" animate="visible">*/}
                    {/*    <motion.circle cx="300" cy="300" r="240" stroke="#ff0055" variants={draw}></motion.circle>*/}
                    {/*</motion.svg>*/}
                    <div>ЗАГРУЗКА РЕСУРСОВ</div>
                    <div>{progress}%</div>
                </Box>
            )}
        </AnimatePresence>
    );
};

export default AssetsLoading;
