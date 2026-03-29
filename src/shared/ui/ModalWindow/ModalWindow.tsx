import cn from "classnames";
import styles from "./ModalWindow.module.scss";
import type {ModalWindowProps} from "./ModalWindow.props.ts";


function ModalWindow({ close, children, className, ...props }: ModalWindowProps) {
    return (
        <div onClick={close} className={cn(styles["modal-window"], className)} {...props} >
            {children}
        </div>
    )
}

export default ModalWindow