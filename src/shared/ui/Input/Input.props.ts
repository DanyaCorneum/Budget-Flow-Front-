import  {type HTMLAttributes} from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    isValid: boolean;
    className?: string;
    placeholder?: string;
}