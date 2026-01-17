import Card from "../../shared/ui/Card/Card.tsx";
import type {PlanCardProps} from "./PlansCard.props.ts";
import styles from "./PlansCard.module.scss"
import cn from "classnames";

function PlansCard(props: PlanCardProps) {
    const amount = props.getAmount() ?? 0;
    const amountText = amount.toString() + "₽"

    return (
        <Card title={amountText} className={cn(styles["plans-card"])}>
            <div className={cn(styles["plans-card__container"])}>
                <p>{props.description}</p>
                <div className={cn(styles["progress-bar"])}></div>
            </div>
        </Card>
    )
}

export default PlansCard;