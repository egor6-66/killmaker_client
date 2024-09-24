import React, { HTMLAttributes, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import styles from './styles.module.scss';

type Props = {
    link?: string;
} & HTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
    const { children, link, className, onClick, ...rest } = props;
    const navigate = useNavigate();

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (link) {
            navigate(link);
        }

        onClick && onClick(event);
    };

    const getClasses = () => {
        const classes = [className, styles.base];
        if (link) classes.push(styles.link);

        return classes;
    };

    return (
        <button onClick={handleClick} className={classNames(...getClasses())} {...rest}>
            {children}
        </button>
    );
};

export default Button;
