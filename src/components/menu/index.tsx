import React from 'react';
import classNames from 'classnames';

import Button from '../button';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Menu = (props: IProps) => {
    const { items, activeItemId } = props;

    return (
        <ul className={classNames(styles.wrapper)}>
            {items.map(({ id, title, icon, onClick, onMouseLeave, onMouseEnter }) => (
                <Button
                    active={id === activeItemId}
                    key={id}
                    onClick={() => onClick(id)}
                    onMouseEnter={() => onMouseEnter && onMouseEnter(id)}
                    onMouseLeave={() => onMouseLeave && onMouseLeave(id)}
                    className={styles.item}
                >
                    {title}
                </Button>
            ))}
        </ul>
    );
};

export default Menu;
