import React from 'react';

import Api from '@/api';
import { Image } from '@/components';

import styles from './styles.module.scss';

const Header = () => {
    const { data: viewer } = Api.user.getViewer();

    return (
        <div className={styles.wrapper}>
            <div className={styles.userInfo}>
                {/*<Image src={viewer?.data?.avatar} />*/}
                {/*<div>{viewer?.data.nickname}</div>*/}
            </div>
        </div>
    );
};

export default Header;
