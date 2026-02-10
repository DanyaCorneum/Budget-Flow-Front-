import { Card } from "../../shared";
import styles from "./ExpensCard.module.scss";
import cn from "classnames";
import type { ExpensCardProps } from "./ExpensCard.props.ts";

function ExpensCard({
  name,
  expens_llimit,
  expens_rlimit,
  icon,
  color = '#DF654F'
}: ExpensCardProps) {

  return (
    <Card className={cn(styles["expense-card"])}>
      <div>
        <div className={styles.iconCircle}>
          <span dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
        </div>
        <div className={styles.textSection}>
          <h3 className={cn(styles["category"])}>
            {name}
          </h3>
          <h2 className={cn(styles["amount-info"])}>{expens_llimit}₽ из {expens_rlimit}₽</h2>
        </div>
      
      <div className={cn(styles["progress-container"])}>
        <div 
          className={cn(styles["progress-bar"])} 
          style={{ backgroundColor: color }}
        >
          <div 
            className={cn(styles["progress-fill"])} 
            style={{ 
              backgroundColor: color 
            }} 
          />
        </div>
      </div>
    </Card>
  );
}

export default ExpensCard;