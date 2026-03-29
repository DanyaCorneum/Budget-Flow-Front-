import cn from "classnames";
import styles from "./LoginWindow.module.scss";
import {LoginForm} from "../../features";

function LoginWindow(){
    return (
        <div className={cn(styles["sign-in-window"])}>
            <h2 className={cn(styles["title"])}>Sign In to Budget Flow</h2>
            <LoginForm/>
        </div>
    )
}
export default LoginWindow;