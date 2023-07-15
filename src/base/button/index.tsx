import { ReactNode } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => (
  <button type="button" className="text-white text-[32px] uppercase w-full h-screen" onClick={() => onClick()}>
    {children}
  </button>
);
