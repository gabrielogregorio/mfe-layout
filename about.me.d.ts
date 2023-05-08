/// <reference types="react" />
import { ScreenEnum } from "./screen";
type Props = {
    updateScreen: (newScreen: ScreenEnum) => void;
};
export declare const About: ({ updateScreen }: Props) => JSX.Element;
export {};
