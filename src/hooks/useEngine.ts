import { useEffect, useState } from 'react';
import useZustand from 'react-use-zustand';

interface IEngineStore {
    engineIsLoaded: boolean;
    isLoadingAssets: boolean;
    currentLevel: string;
    loadingProgress: number;
    activeController: boolean;
}

const engineStore = useZustand<IEngineStore>({
    keys: ['engineIsLoaded', 'isLoadingAssets', 'currentLevel', 'loadingProgress', 'activeController'],
});

interface IProps {
    listeners?: Array<{
        eventName: string;
        event: <T = object>(data?: T) => void;
    }>;
}

function useEngine(props?: IProps) {
    const { listeners } = props || {};

    const engineIsLoaded = engineStore.use.engineIsLoaded();
    const isLoadingAssets = engineStore.use.isLoadingAssets();
    const currentLevel = engineStore.use.currentLevel();
    const loadingProgress = engineStore.use.loadingProgress();
    const activeController = engineStore.use.activeController();

    const call = (eventName: string, data: object) => {
        if (engineIsLoaded.value) {
            //@ts-ignore
            _ClientEvent(stringToNewUTF8(eventName), stringToNewUTF8(JSON.stringify(data)));
        }
    };

    useEffect(() => {
        const canvas = document.getElementById('canvas');

        if (canvas) {
            canvas.style.pointerEvents = activeController.value ? 'auto' : 'none';
        }
    }, [activeController.value]);

    useEffect(() => {
        window.engine.engineEvent = function ({ eventName, data }) {
            if (eventName === 'EngineLoaded') {
                engineIsLoaded.set(true);
                isLoadingAssets.set(true);
            }

            if (eventName === 'OnLevelTransition') {
                console.log(data);
                isLoadingAssets.set(data.isLoading);
                currentLevel.set(data.levelName.split('_').slice(1).join('_'));
            }

            if (eventName === 'AssetsLoadingProgress') {
                loadingProgress.set(data.value);
            }

            if (listeners?.length) {
                listeners.forEach((i) => {
                    i.eventName === eventName && i.event(data);
                });
            }
        };
    }, [listeners?.length]);

    return {
        engineIsLoaded: engineIsLoaded.value,
        isLoadingAssets: isLoadingAssets.value,
        currentLevel: currentLevel.value,
        loadingProgress: loadingProgress.value,
        activeController,
        call,
    };
}

export default useEngine;
