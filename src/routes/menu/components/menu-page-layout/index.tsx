import React, { ReactNode, useMemo, useState } from 'react';
import { Route, RouteProps, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Box, IMenu, Menu } from '@/components';

import styles from './styles.module.scss';

interface IProps {
    root: string;
    disabledChildRoutesAnim?: boolean;
    items: Array<{
        id: number;
        path: string;
        title: string;
        element?: ReactNode;
    }>;
}

const MenuPageLayout = (props: IProps) => {
    const { root, items, disabledChildRoutesAnim } = props;
    const location = useLocation();
    const navigate = useNavigate();
    const [enableWidthAnim, setEnableWidthAnim] = useState(true);

    const { menuItems, routes } = useMemo(() => {
        return items.reduce(
            (acc: { menuItems: Array<IMenu.IItem>; routes: Array<RouteProps> }, i) => {
                acc.menuItems.push({
                    id: i.id,
                    title: i.title,
                    payload: i.path,
                    onClick: () => {
                        navigate(i.element ? `/menu/${root}${i.path}` : '/menu/home/main');
                    },
                });
                acc.routes.push({ path: i.path, element: i.element });

                return acc;
            },
            { menuItems: [], routes: [] }
        );
    }, []);

    return (
        <Box className={styles.wrapper} enableAnimation>
            <Box className={styles.nav} direction={'vertical'} enableAnimation>
                <Menu items={menuItems} activeItemId={menuItems.find((i) => i.payload === '/' + location.pathname.replace(/\/$/, '').split('/').pop())?.id} />
            </Box>
            <AnimatePresence mode={'wait'}>
                <Routes location={location} key={disabledChildRoutesAnim ? '' : location.pathname}>
                    {routes.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <Box
                                    bg
                                    className={`${styles.routeWrapper} ${root === 'auth' ? styles.routeWrapper_auth : ''}`}
                                    animationVariants={'autoWidth'}
                                    enableAnimation={enableWidthAnim}
                                    onAnimationComplete={() => setEnableWidthAnim(false)}
                                >
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

export default MenuPageLayout;
