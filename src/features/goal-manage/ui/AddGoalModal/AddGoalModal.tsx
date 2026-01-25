import cn from "classnames";
import styles from "./AddGoalModal.module.scss";
import type {BaseModalProps} from "../../../../shared";

// interface AddGoalProps extends BaseModalProps {
//
// }

function AddGoalModal({ close }: BaseModalProps) {
    return (
        <div onClick={close} className={cn(styles["goal-add"])}>
            <div className={styles["goal-add__container"]} onClick={(e)=> { e.stopPropagation()}}>
                <h1>Add Goal</h1>
            </div>
        </div>
    )
}

export default AddGoalModal;