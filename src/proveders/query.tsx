import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IProps {
    children: ReactNode;
}

const QueryProvider = (props: IProps) => {
    const { children } = props;

    const queryClientConfig = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnReconnect: true,
                retry: 0,
                refetchOnWindowFocus: false,
            },
        },
    });

    return <QueryClientProvider client={queryClientConfig}>{children}</QueryClientProvider>;
};

export default QueryProvider;
