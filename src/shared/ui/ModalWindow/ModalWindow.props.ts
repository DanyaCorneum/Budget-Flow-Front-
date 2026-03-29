import type {HTMLAttributes, ReactNode} from "react";

export interface ModalWindowProps extends HTMLAttributes<HTMLDivElement>{
    close:  () => void;
    children: ReactNode;
    className: string;
}