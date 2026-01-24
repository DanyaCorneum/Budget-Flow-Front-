import {type ChangeEvent, type HTMLAttributes} from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    isValid: boolean;
    className?: string;
    placeholder?: string;
    type?: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    clearable?: boolean;
    value?: string;
}