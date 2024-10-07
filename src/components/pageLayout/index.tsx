import React from 'react';
import { Route, RouteProps, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Box, IMenu, Menu } from '@/components';

import styles from './styles.module.scss';

interface IProps {
    menuItems: Array<IMenu.IItem>;
    routes: Array<RouteProps>;
}

const PageLayout = (props: IProps) => {
    const { menuItems, routes } = props;
    const location = useLocation();

    return (
        <Box className={styles.wrapper} enableAnimation>
            <Box className={styles.nav} direction={'vertical'} enableAnimation>
                <Menu items={menuItems} activeItemId={menuItems.find((i) => i.payload === '/' + location.pathname.replace(/\/$/, '').split('/').pop())?.id} />
            </Box>
            <AnimatePresence mode={'wait'}>
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <Box bg className={styles.route} animationVariants={'autoWidth'} enableAnimation>
                                    {element}
                                </Box>
                            }
                        />
                    ))}
                </Routes>
            </AnimatePresence>
        </Box>
    );
};

export default PageLayout;
