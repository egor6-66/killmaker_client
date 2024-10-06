import { ReactNode } from 'react';

export interface IItem {
    id: number;
    title: string;
    icon?: ReactNode;
    onClick: (id: number) => void;
    onMouseEnter?: (id: number) => void;
    onMouseLeave?: (id: number) => void;
}

export interface IProps {
    items: Array<IItem>;
}
