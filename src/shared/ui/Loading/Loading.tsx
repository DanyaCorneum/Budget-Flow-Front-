import cn from "classnames"
import styles from "./Loading.module.scss"

function Loading() {
    return (
        <div className={cn(styles["loading-container"])}>
            <div className={cn(styles["loading"])}></div>
        </div>
    )
}

export default Loading