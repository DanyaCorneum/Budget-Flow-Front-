import cn from "classnames";
import styles from "./RegisterUser.module.scss";
import {RegisterForm} from "../../features";

function RegisterUser(){
    return (
        <div className={cn(styles["sign-in-window"])}>
            <h2 className={cn(styles["title"])}>Sign In to Budget Flow</h2>
            <RegisterForm/>
        </div>
    )
}
export default RegisterUser;