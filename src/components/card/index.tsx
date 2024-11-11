import React from 'react';
import classNames from 'classnames';

import Image from '../image';

import styles from './styles.module.scss';

interface IProps {
    img: string;
    fields: object;
}

const Card = (props: IProps) => {
    const { img, fields } = props;

    const getClasses = () => {
        return [styles.wrapper];
    };

    return (
        <div className={classNames(getClasses())}>
            <Image full src={img} />
            <div className={styles.fields}>
                {Object.entries(fields).map(([key, val], index) => (
                    <div key={index} className={styles.row}>
                        <div className={styles.key}>{key}</div>
                        <div className={styles.val}>{val}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
