import styles from "./AddGoal.module.scss"
import {Button, useModal} from "../../../../shared";
import AddGoalModal from "../AddGoalModal/AddGoalModal.tsx";

function AddGoal() {
    const {isOpen, open, close} = useModal()

    const clickHandler = () => {
        open()
    }
    return (<>
            {isOpen && <AddGoalModal close={close}/>}
            <Button className={styles["add-goal"]} onClick={clickHandler}>
                +
            </Button>
        </>
    )
}

export default AddGoal;