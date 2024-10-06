import React from 'react';
import classNames from 'classnames';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Menu = (props: IProps) => {
    const { items } = props;

    return (
        <ul className={classNames(styles.wrapper)}>
            {items.map(({ id, title, icon, onClick, onMouseLeave, onMouseEnter }) => (
                <li
                    key={id}
                    onClick={() => onClick(id)}
                    onMouseEnter={() => onMouseEnter && onMouseEnter(id)}
                    onMouseLeave={() => onMouseLeave && onMouseLeave(id)}
                    className={styles.item}
                >
                    {title}
                </li>
            ))}
        </ul>
    );
};

export default Menu;
