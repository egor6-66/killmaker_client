import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface IProps {
    items: Array<{
        id: number;
        title: string;
        icon?: ReactNode;
        onClick: () => void;
    }>;
}

const Menu = (props: IProps) => {
    const { items } = props;

    return (
        <ul className={classNames(styles.wrapper)}>
            {items.map(({ id, title, icon, onClick }) => (
                <li key={id} onClick={onClick} className={styles.item}>
                    {title}
                </li>
            ))}
        </ul>
    );
};

export default Menu;
