import React from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Box, IMenu, Menu } from '@/components';

import styles from './styles.module.scss';

interface IProps {
    menuItems: Array<IMenu.IItem>;
    routes: Array<RouteProps>;
}

const PageLayout = (props: IProps) => {
    const { menuItems, routes } = props;

    return (
        <Box className={styles.wrapper}>
            <Box className={styles.nav} direction={'vertical'}>
                <Menu items={menuItems} />
            </Box>
            <AnimatePresence mode={'wait'}>
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <Box bg className={styles.route} animationVariants={'autoWidth'}>
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
