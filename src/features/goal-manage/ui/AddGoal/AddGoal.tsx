import styles from "./AddGoal.module.scss"
import cn from "classnames";
import {Button} from "../../../../shared";

function AddGoal() {
    const clickHandler = () => {}
   return(
       <Button className={cn(styles["add-goal"])} onClick={clickHandler}>  
           Добавить цель
       </Button>
   )
}

export default AddGoal;