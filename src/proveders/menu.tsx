import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useEngine } from '@/hooks';

interface IProps {
    children: ReactNode;
}

const MenuProvider = (props: IProps) => {
    const { children } = props;
    const { pathname } = useLocation();

    const { call, currentLevel, isLoadingAssets } = useEngine();

    useEffect(() => {
        call('SetLevel', { LevelName: 'Menu' });
    }, []);

    useEffect(() => {
        if (currentLevel === 'Menu') {
            const pathSplit = pathname.split('/').filter((i) => !!i);
            call('SetRout', { Location: pathSplit[2] || pathSplit[1], Mesh: [...pathSplit].pop() });
        }
    }, [isLoadingAssets, currentLevel, pathname]);

    return !isLoadingAssets && currentLevel === 'Menu' ? children : null;
};

export default MenuProvider;
