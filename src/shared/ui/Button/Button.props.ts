import  {type HTMLAttributes} from "react";
import * as React from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}