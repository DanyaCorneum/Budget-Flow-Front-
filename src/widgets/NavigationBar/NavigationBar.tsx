import {Link, Outlet} from "react-router-dom";
import cn from "classnames";
import styles from "./NavigationBar.module.scss"
import {default as Tbank} from "../../assets/tbank.svg"
import {default as User} from  "../../assets/user.svg"



function NavigationBar() {
    return (
        <div className={"content"}>

            <div className={cn(styles["nav-bar"])}>
                <div className={cn(styles["main"])}>
                    <img src={Tbank} alt={"tbank"}></img>
                    <Link className={cn(styles["nav-link"])} to={"/"}>Главная</Link>
                    <Link className={cn(styles["nav-link"])} to={"/about"}>История</Link>
                    <Link className={cn(styles["nav-link"])} to={"/other"}>О нас</Link>
                </div>
                <div className={cn(styles["sign-in"])}>
                    <Link className={cn(styles["nav-link"], styles["profile"])} to={"/sign-in"}>Войти <img src={User} alt={"user"}/></Link>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default NavigationBar;