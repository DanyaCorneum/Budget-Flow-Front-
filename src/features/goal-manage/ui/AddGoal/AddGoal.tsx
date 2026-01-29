import styles from "./AddGoal.module.scss"
import {Button, useModal} from "../../../../shared";
import AddGoalModal from "../AddGoalModal/AddGoalModal.tsx";
import type {GoalProps} from "../../model/types.ts";
import {useEffect} from "react";

interface AddGoalProps {
    goals: GoalProps[]
    onNewGoal?: () => void;
}

function AddGoal({goals, onNewGoal} : AddGoalProps) {
    const {isOpen, open, close} = useModal()

    const clickHandler = () => {
        open()
    }
    useEffect(() => {
        close()
    }, [close, goals])
    return (<>
            {isOpen && <AddGoalModal goals={goals} onNew={onNewGoal} close={close}/>}
            <Button className={styles["add-goal"]} onClick={clickHandler}>
                +
            </Button>
        </>
    )
}

export default AddGoal;