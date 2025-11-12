import {forwardRef} from "react";
import type {InputProps} from "./Input.props.ts";
import cn from "classnames";
import styles from "./Input.module.scss"

const Input = forwardRef<HTMLInputElement, InputProps>(
    function Input({className="", isValid=true, ...props}, ref) {
        return (
            <input ref={ref} {...props} className={cn(styles["input"], className)}/>
        )
    }
)



export default Input