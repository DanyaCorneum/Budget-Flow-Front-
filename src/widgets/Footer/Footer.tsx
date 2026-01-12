import styles from "./Footer.module.scss"
import cn from "classnames";

function Footer(){
    return (
        <div className={cn(styles['footer'])}>
            Footer
        </div>
    )
}

export default Footer;