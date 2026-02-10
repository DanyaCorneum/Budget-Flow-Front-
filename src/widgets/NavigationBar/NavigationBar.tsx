import {Link, Outlet} from "react-router-dom";
import cn from "classnames";
import styles from "./NavigationBar.module.scss"
import {default as Tbank} from "../../assets/tbank.svg"
import {default as User} from "../../assets/user.svg"
import {useModal} from "../../shared";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";


function NavigationBar() {
    const {open, close, isOpen} = useModal()
    const [toggleVisible, setToggleVisible] = useState<boolean>(false);
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 1200) {
                setToggleVisible(true);
            } else {
                setToggleVisible(false);
                close()
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [close]);

    const onResize = () => {
        const width = window.innerWidth;
        if (width > 1200) {
            close()
            setToggleVisible(true);
        }
    };

    const modalWindow = <div onReset={onResize} onClick={close} style={{position: "fixed"}}
                             className={styles["modal-window"]}>
        <div className={styles["modal-window__container"]} onClick={(e) => {
            e.stopPropagation()
        }}>
            <Link onClick={
                close
            } className={cn(styles["nav-link"])}
                  to={"/"}>Главная</Link>
            <Link onClick={
                close
            } className={cn(styles["nav-link"])}
                  to={"/about"}>История</Link>
            <Link onClick={
                close
            } className={cn(styles["nav-link"])}
                  to={"/other"}>О нас</Link>
            <div className={cn(styles["sign-in"])}>
                <Link onClick={
                    close
                } className={cn(styles["nav-link"], styles["profile"])} id={styles["user"]} to={"/user"}>Личный
                    кабинет <img
                        src={User} alt={"user"}/></Link>
            </div>
        </div>
    </div>

    return (
        <div className={"content"}>
            <div className={cn(styles["nav-bar"])}>
                <main>
                    <img src={Tbank} alt={"tbank"}></img>
                    <Link style={{display: toggleVisible ? "none" : "flex"}} className={cn(styles["nav-link"])}
                          to={"/"}>Главная</Link>
                    <Link style={{display: toggleVisible ? "none" : "flex"}} className={cn(styles["nav-link"])}
                          to={"/about"}>История</Link>
                    <Link style={{display: toggleVisible ? "none" : "flex"}} className={cn(styles["nav-link"])}
                          to={"/other"}>О нас</Link>
                </main>
                <div style={{display: toggleVisible ? "none" : "block"}} className={cn(styles["sign-in"])}>
                    <Link className={cn(styles["nav-link"], styles["profile"])} to={"/user"}>Личный кабинет <img
                        src={User} alt={"user"}/></Link>
                </div>
                <i className="bi bi-justify" style={{display: toggleVisible ? "block" : "none"}}
                   onClick={open}/>
            </div>
            {
                isOpen && createPortal(modalWindow, document.body)
            }
            <Outlet/>
        </div>
    )
}

export default NavigationBar;