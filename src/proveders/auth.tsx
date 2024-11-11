import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Api, { axiosInstance } from '@/api';

interface IProps {
    children: ReactNode;
}

const AuthProvider = (props: IProps) => {
    const navigate = useNavigate();
    const { children } = props;

    const isAuthPage = window.location.pathname.includes('auth');

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.data?.invalidRefresh && !isAuthPage) {
                navigate('/menu/auth');
            }
        }
    );

    const { data: viewerData } = Api.user.getViewer();

    useEffect(() => {
        if (viewerData?.status === 200 && isAuthPage) {
            navigate('/menu/home/main');
        }
    }, [viewerData]);

    return children;
};

export default AuthProvider;
