import styles from "./Button.module.scss"
import cn from "classnames"
import type {ButtonProps} from "./Button.props.ts";


function Button({children, className = "", ...props}: ButtonProps) {
    return (
        <button {...props} className={cn(styles["button"], styles[className])}>
            {children}
        </button>
    )
}

export default Button;