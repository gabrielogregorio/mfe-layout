import { ReactNode } from 'react';
type ButtonProps = {
    onClick: () => void;
    children: ReactNode;
};
export declare const Button: ({ onClick, children }: ButtonProps) => JSX.Element;
export {};
