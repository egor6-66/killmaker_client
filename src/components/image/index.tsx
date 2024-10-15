import React from 'react';

import * as ImageTypes from './interface';

import styles from './styles.module.scss';

const Image = (props: ImageTypes.IProps) => {
    const { src, blur, width = 30, height = 30 } = props;

    return (
        <div className={styles.wrapper} style={{ width, height }}>
            <img className={styles.image} width={blur ? width - 20 : width} height={blur ? height - 20 : height} src={src || ''} alt={''} />
            {blur && <div className={styles.blur} style={{ backgroundImage: `url(${src})` }}></div>}
        </div>
    );
};

export type { ImageTypes };

export default Image;
