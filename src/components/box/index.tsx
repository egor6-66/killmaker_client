import React, { forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { motion, MotionProps } from 'framer-motion';

import styles from './styles.module.scss';

const animations = {
    opacity: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    autoHeight: {
        initial: { height: 0 },
        animate: { height: '100%' },
        exit: { height: 0 },
    },
    autoWidth: {
        initial: { width: 0 },
        animate: { width: '100%' },
        exit: { width: 0 },
    },
};

type Props = {
    direction?: 'vertical' | 'horizontal';
    animationVariants?: keyof typeof animations;
    animationKey?: string;
    enableAnimation?: boolean;
    bg?: boolean;
} & HTMLAttributes<HTMLDivElement> &
    MotionProps;

const Box = forwardRef((props: Props, ref: any) => {
    const { children, className, animationVariants = 'opacity', enableAnimation, direction, animationKey, bg, ...rest } = props;

    const getClasses = () => {
        const classes = [className, styles.wrapper, styles[direction]];
        if (bg) classes.push(styles.bg);

        return classes;
    };

    const getAnimation = () => {
        return enableAnimation ? animations[animationVariants] : {};
    };

    return (
        <motion.div ref={ref} key={animationKey} className={classNames(...getClasses())} {...getAnimation()} transition={{ duration: 0.25 }} {...rest}>
            {children}
        </motion.div>
    );
});

export default Box;
