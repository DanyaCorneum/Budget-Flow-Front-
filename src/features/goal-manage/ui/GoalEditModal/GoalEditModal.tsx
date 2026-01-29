import cn from "classnames";
import styles from "./GoalEditModal.module.scss";

interface GoalEditModalProps {
    close?: () => void
}

function GoalEditModal({ close }: GoalEditModalProps) {
    return (
        <div onClick={close} className={cn(styles["goal-edit"])}>
            <div className={styles["goal-card__container"]} onClick={(e)=> { e.stopPropagation()}}>
                <h1>Goal edit</h1>

            </div>
        </div>
    )
}

export default GoalEditModal