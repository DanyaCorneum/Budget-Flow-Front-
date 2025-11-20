import {Button} from "../../shared";
import crossExit from "../../assets/cross-exit.svg"
import cn from "classnames"
import styles from "./Exit.module.scss"
import {useNavigate} from "react-router-dom";



function Exit(){
    const navigate = useNavigate()

    return <Button className={cn(styles['exit'])} onClick={() => navigate("/")}><img src={crossExit} alt={"cross"}/></Button>
}

export default Exit;