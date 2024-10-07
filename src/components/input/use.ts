import { ChangeEvent, InputHTMLAttributes, useCallback, useState } from 'react';

import { useDebounce } from '@/hooks';

import { IUseProps } from './interface';

function use(props: IUseProps) {
    const { debounceDelay, debounce, cut, validator, attrs } = props;

    const [state, setState] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setErrorMessage('');

        if (cut) {
            value = value.replace(cut, '');
        }

        if (validator) {
            if (validator.regex.test(value)) {
                setErrorMessage(validator.errorMessage);
            }
        }

        setState(value);
    }, []);

    const setError = (value: string) => {
        setErrorMessage(value);
    };

    useDebounce(
        () => {
            state && debounce && debounce(state);
        },
        debounceDelay || 1000,
        [state]
    );

    return {
        value: state,
        errorMessage,
        isError: !!errorMessage,
        setError,
        inputAttrs: {
            value: state,
            onChange,
            ...attrs,
        } as InputHTMLAttributes<HTMLInputElement>,
    };
}

export default use;
