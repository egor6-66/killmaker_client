import React, { ReactNode } from 'react';

import { Loaders } from '@/components';
import { useEngine } from '@/hooks';

interface IProps {
    children: ReactNode;
}

const EngineProvider = (props: IProps) => {
    const { children } = props;

    const { isLoadingAssets, loadingProgress, currentLevel } = useEngine();

    return (
        <>
            <Loaders.Assets visible={!currentLevel || !currentLevel || isLoadingAssets} assetsLoadingPercent={loadingProgress} />
            {children}
        </>
    );
};

export default EngineProvider;
