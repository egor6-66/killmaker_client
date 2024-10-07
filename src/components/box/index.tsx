import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { motion, MotionProps } from 'framer-motion';

import styles from './styles.module.scss';

type Props = {
    direction?: 'vertical' | 'horizontal';
    animationVariants?: 'opacity' | 'autoWidth';
    gap?: number;
    animationKey?: string;
    enableAnimation?: boolean;
    bg?: boolean;
} & HTMLAttributes<HTMLDivElement> &
    MotionProps;

const animations = {
    opacity: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    autoWidth: {
        initial: { width: 0 },
        animate: { width: '100%' },
        exit: { width: 0 },
    },
};

const Box = (props: Props) => {
    const { children, className, gap = 8, animationVariants = 'opacity', enableAnimation, direction, animationKey, bg, ...rest } = props;

    const getClasses = () => {
        const classes = [className, styles.wrapper, styles[direction]];
        if (bg) classes.push(styles.bg);

        return classes;
    };

    const getAnimation = () => {
        return enableAnimation ? animations[animationVariants] : {};
    };

    return (
        <motion.div style={{ gap }} key={animationKey} className={classNames(...getClasses())} {...getAnimation()} {...rest} transition={{ duration: 0.5 }}>
            {children}
        </motion.div>
    );
};

export default Box;
