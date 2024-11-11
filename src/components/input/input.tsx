import React, { useState } from 'react';
import classNames from 'classnames';

import * as InputTypes from './interface';

import styles from './styles.module.scss';

const Input = (props: InputTypes.IProps) => {
    const { errorMessage, attrs } = props;

    const [active, setActive] = useState(false);

    const getClasses = () => {
        const classes = [styles.input];
        if (active) classes.push(styles.active);

        return classes;
    };

    return (
        <div className={classNames(getClasses())}>
            <input {...attrs} onFocus={() => setActive(true)} onBlur={() => setActive(false)} />
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>
    );
};

export type { InputTypes };

export default Input;
