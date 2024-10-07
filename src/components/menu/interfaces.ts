import { ReactNode } from 'react';

export interface IItem<T = any> {
    id: number;
    title: string;
    icon?: ReactNode;
    payload?: T;
    onClick: (id: number) => void;
    onMouseEnter?: (id: number) => void;
    onMouseLeave?: (id: number) => void;
}

export interface IProps {
    items: Array<IItem>;
    activeItemId?: number;
}
