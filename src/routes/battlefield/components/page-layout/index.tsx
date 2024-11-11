import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';

import { Box, Button } from '@/components';
import { useEngine } from '@/hooks';

import styles from './styles.module.scss';

interface IProps {
    children: ReactNode;
}

const PageLayout = (props: IProps) => {
    const { children } = props;
    const navigate = useNavigate();
    const params = useParams();
    const engine = useEngine();
    const [visibleMenu, setVisibleMenu] = useState(true);
    const canvas = useRef(document.getElementById('canvas'));

    const [init, setInit] = useState(true);

    const pointerLock = () => {
        if (canvas.current) {
            canvas.current.focus();
            canvas.current.requestPointerLock();
        }
    };

    const exit = () => {
        navigate(`/menu/home/servers/${window.location.pathname.split('/')[2]}`);
    };

    useEffect(() => {
        const handler = () => {
            if (!document.pointerLockElement) {
                canvas.current.blur();
            }

            setVisibleMenu(!document.pointerLockElement);
        };

        document.addEventListener('pointerlockchange', handler);

        return () => {
            canvas.current.removeEventListener('pointerlockchange', handler);
        };
    }, []);

    useEffect(() => {
        engine.call('SetLevel', { LevelName: params.id });
        setTimeout(() => {
            setInit(false);
        }, 1000);
    }, [params.id]);

    return (
        <div className={classNames([styles.wrapper, !visibleMenu ? styles.wrapper_hidden : ''])}>
            <AnimatePresence>
                {!engine.isLoadingAssets && !init && (
                    <Box bg className={styles.body} enableAnimation>
                        {children}
                        <div className={styles.btns}>
                            <Button onClick={pointerLock}>GET CONTROLLER</Button>
                            <Button onClick={exit}>GO Menu</Button>
                        </div>
                    </Box>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PageLayout;
