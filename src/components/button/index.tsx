import React, { HTMLAttributes, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { motion, MotionProps } from 'framer-motion';

import styles from './styles.module.scss';

type Props = {
    link?: string;
    active?: boolean;
    error?: boolean;
    disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement> &
    MotionProps;

const Button = (props: Props) => {
    const { children, link, disabled, className, error, active, onClick, ...rest } = props;
    const navigate = useNavigate();

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (active) return;

        if (link) {
            navigate(link);
        }

        onClick && onClick(event);
    };

    const getClasses = () => {
        const classes = [className, styles.wrapper];
        if (active) classes.push(styles.active);
        if (disabled) classes.push(styles.disabled);
        if (error) classes.push(styles.error);

        return classes;
    };

    return (
        <button onClick={handleClick} className={classNames(...getClasses())} {...rest}>
            <motion.div key={String(children)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {children}
            </motion.div>
        </button>
    );
};

export default Button;
