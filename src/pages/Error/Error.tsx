import cn from "classnames"
import styles from "./Error.module.scss"

function Error(){
    return (
        <div className={cn(styles["error"])}>
            <h1>Error 404 - page not found</h1>
            <img src={"https://i.pinimg.com/736x/38/5b/78/385b780dcbeca9f2555eba6adeaa7327.jpg"} alt=""/>
        </div>
    )
}

export default Error