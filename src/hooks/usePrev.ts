import { useEffect, useRef } from 'react';

function usePrev<T>(value: T) {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}

export default usePrev;
