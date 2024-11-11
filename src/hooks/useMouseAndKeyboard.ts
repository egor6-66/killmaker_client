import { useEffect } from 'react';

interface IProps {
    onPressKey: (data: any) => void;
}

function useMouseAndKeyboard(props: IProps) {
    useEffect(() => {
        document.addEventListener('keypress', (event) => {
            console.log(event);

            if (event.keyCode == 13) {
                alert('hi.');
            }
        });
    }, []);
}

export default useMouseAndKeyboard;
