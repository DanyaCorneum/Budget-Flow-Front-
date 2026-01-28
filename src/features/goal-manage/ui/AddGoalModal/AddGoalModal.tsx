import styles from "./AddGoalModal.module.scss";
import ModalWindow from "../../../../shared/ui/ModalWindow/ModalWindow.tsx";
import type {AddGoalModalProps} from "./AddGoalModal.props.tsx";


function AddGoalModal({close}: AddGoalModalProps) {
    return (
        <ModalWindow close={close} className={styles["goal-add"]}>
            <div className={styles["goal-add__container"]} onClick={(e) => {
                e.stopPropagation()
            }}>
                <h1>Add Goal</h1>
            </div>
        </ModalWindow>
    )
}

export default AddGoalModal;