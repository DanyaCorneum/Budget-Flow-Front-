import {Button} from "../../shared";
import crossExit from "../../assets/cross-exit.svg"
import cn from "classnames"
import styles from "./Exit.module.scss"
import {useNavigate} from "react-router-dom";


export interface ExitProps {
    className: string
}

function Exit({className}: ExitProps){
    const navigate = useNavigate()

    return <Button className={cn(styles['exit'], className)} onClick={() => navigate("/home")}><img src={crossExit} alt={"cross"}/></Button>
}

export default Exit;