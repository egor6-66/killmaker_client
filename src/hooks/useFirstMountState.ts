import { useRef } from 'react';

function useFirstMountState(): boolean {
    const isFirst = useRef(true);

    if (isFirst.current) {
        isFirst.current = false;

        return true;
    }

    return isFirst.current;
}

export default useFirstMountState;
