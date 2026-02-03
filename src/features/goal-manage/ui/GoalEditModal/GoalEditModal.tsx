import styles from "./GoalEditModal.module.scss";
import ModalWindow from "../../../../shared/ui/ModalWindow/ModalWindow.tsx";
import {createPortal} from "react-dom";
interface GoalEditModalProps {
    close: () => void
}

function GoalEditModal({close}: GoalEditModalProps) {
    const modalContent = (
        <ModalWindow close={close} className={styles["goal-edit"]}>
            <div className={styles["goal-card__container"]} onClick={(e) => {
                e.stopPropagation()}}>
                <form>
                </form>
            </div>
        </ModalWindow>
    )

    return createPortal(modalContent, document.body)
}

export default GoalEditModal