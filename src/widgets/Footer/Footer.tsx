import styles from "./Footer.module.scss"
import cn from "classnames";
import {default as Tbank} from "../../assets/tbank.svg"


function Footer() {
    return (
        <div className={cn(styles['footer'])}>
            <div className={cn(styles["main-part"])}>
                <img className={cn(styles["icon"])} src={Tbank} alt={"tbank"}></img>
                <div className={cn(styles["links"])}>
                    <a href={"/"}>О Т-Банке</a>
                    <a href={"/"}>Новости</a>
                    <a href={"/"}>Блог</a>
                    <a href={"/"}>Работа</a>
                    <a href={"/"}>Точки пополнения</a>
                    <a href={"/"}>Банкоматы</a>
                    <a href={"/"}>Курсы валют</a>
                    <a href={"/"}>Контакты</a>
                </div>
            </div>
            <div className={cn(styles["second-row"])}>
                <div className={cn(styles["links-second"])}>
                    <a href={"/"}>Помощь</a>
                    <a href={"/"}>Безопасность</a>
                    <a href={"/"}>Для инвесторов</a>
                </div>
            <div className={cn(styles['number'])}>
                <span className={cn(styles["phone-number"])}>8 800 333-33-33</span> или <span className={cn(styles["phone-number"])}>999</span><br/>
                Бесплатно для звонков по России
            </div>
        </div>
        </div>
    )
}

export default Footer;