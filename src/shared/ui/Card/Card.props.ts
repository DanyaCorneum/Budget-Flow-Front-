import type {HTMLAttributes, ReactNode} from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement>{
    title?: string;
    image?: string;
    text?: string;
    children?: ReactNode;
    hasImage?: boolean;
    className?: string;
}