import cn from "classnames";
import styles from "./BankAccountModal.module.scss";
import type {BaseModalProps} from "../../../../shared";

// interface GoalEditModalProps {
//     close?: () => void
// }

function BankAccountModal({ close }: BaseModalProps) {
    return (
        <div onClick={close} className={cn(styles["goal-edit"])}>
            <div className={styles["goal-card__container"]} onClick={(e)=> { e.stopPropagation()}}>
                <h1>Bank info</h1>

            </div>
        </div>
    )
}

export default BankAccountModal