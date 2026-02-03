import styles from "./GoalEditModal.module.scss";
import ModalWindow from "../../../../shared/ui/ModalWindow/ModalWindow.tsx";
interface GoalEditModalProps {
    close: () => void
}

function GoalEditModal({close}: GoalEditModalProps) {
    return (
        <ModalWindow close={close} className={styles["goal-edit"]}>
            <div className={styles["goal-card__container"]} onClick={(e) => {
                e.stopPropagation()}}>
                <form>
                </form>
            </div>
        </ModalWindow>
    )
}

export default GoalEditModal