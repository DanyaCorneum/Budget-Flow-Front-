import styles from "./AddGoal.module.scss"
import {Button, useModal} from "../../../../shared";
import AddGoalModal from "../AddGoalModal/AddGoalModal.tsx";
import {useEffect} from "react";

function AddGoal() {
    const {isOpen, open, close} = useModal()

    const clickHandler = () => {
        open()
    }
    useEffect(() => {
        close()
    }, [close])
    return (<>
            {isOpen && <AddGoalModal close={close}/>}
            <Button className={styles["add-goal"]} onClick={clickHandler}>
                +
            </Button>
        </>
    )
}

export default AddGoal;