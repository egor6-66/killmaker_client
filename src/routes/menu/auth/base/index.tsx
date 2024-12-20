import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Api from '@/api';
import { Box, Button, Input } from '@/components';

import styles from './styles.module.scss';

const BaseAuth = () => {
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const nickname = Input.use({ cut: /\s/, attrs: { placeholder: 'NICKNAME' } });
    const password = Input.use({ cut: /\s/, attrs: { placeholder: 'PASSWORD' } });

    const handleLogin = Api.auth.login();
    const registration = Api.auth.registration();

    const submit = async () => {
        const data = { nickname: nickname.value, password: password.value };

        if (password.value.length < 5) {
            return setError('СЛИШКОМ КОРОТКИЙ ПАРОЛЬ');
        }

        const onSuccess = () => {
            navigate('/menu/home/main');
        };

        if (location.pathname.includes('login')) {
            handleLogin.mutate(data, {
                onSuccess: (data) => {
                    if (data) {
                        onSuccess();
                    } else {
                        setError('НЕВЕРНЫЙ НИКНЭЙМ ИЛИ ПАРОЛЬ');
                    }
                },
            });
        } else {
            registration.mutate(data, {
                onSuccess: (data) => {
                    if (data) {
                        onSuccess();
                    } else {
                        setError('ЭТОТ НИКНЭЙМ УЖЕ ЗАНЯТ');
                    }
                },
            });
        }
    };

    useEffect(() => {
        setError('');
    }, [nickname.value, password.value, location.pathname]);

    return (
        <Box className={styles.wrapper} direction={'vertical'}>
            <Box direction={'vertical'} className={styles.inputs}>
                <Input attrs={{ ...nickname.inputAttrs }} errorMessage={nickname.errorMessage} />
                <Input attrs={{ ...password.inputAttrs }} errorMessage={password.errorMessage} />
            </Box>
            <Button onClick={submit} error={!!error} disabled={!!error || !nickname.value || !password.value}>
                {error || 'ВПЕРЕД'}
            </Button>
        </Box>
    );
};

export default BaseAuth;
