import styles from "./AddGoal.module.scss"
import cn from "classnames";
import {Button, useModal} from "../../../../shared";
import AddGoalModal from "../AddGoalModal/AddGoalModal.tsx";

function AddGoal() {
    const {isOpen, open, close} = useModal()

    const clickHandler = () => {
        open()
    }
    return (<>
            {isOpen && <AddGoalModal close={close}/>}
            <Button className={cn(styles["add-goal"])} onClick={clickHandler}>
                Добавить цель
            </Button>
        </>
    )
}

export default AddGoal;