import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { motion, MotionProps } from 'framer-motion';

import styles from './styles.module.scss';

type Props = {
    direction?: 'vertical' | 'horizontal';
    animationVariants?: 'opacity' | 'autoWidth';
    animationKey?: string;
    disabledAnimation?: boolean;
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
    const { children, className, animationVariants = 'opacity', disabledAnimation, direction, animationKey, bg, ...rest } = props;

    const getClasses = () => {
        const classes = [className, styles.wrapper, styles[direction]];
        if (bg) classes.push(styles.bg);

        return classes;
    };

    const getAnimation = () => {
        if (disabledAnimation) {
            // return { style: animations[animationVariants].animate };
            return {};
        }

        return animations[animationVariants];
    };

    return (
        <motion.div key={animationKey} className={classNames(...getClasses())} {...getAnimation()} {...rest} transition={{ duration: __transitionSpeed__ }}>
            {children}
        </motion.div>
    );
};

export default Box;
