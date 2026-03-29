import cn from "classnames";
import styles from "./BankAccountModal.module.scss";
import ModalWindow from "../../../../shared/ui/ModalWindow/ModalWindow.tsx";
import type {BankAccountModalProps} from "./BankAccountModal.props.ts";

function BankAccountModal({close, icon, bank, date, cvv, number, name, amount}: BankAccountModalProps) {

    return (
        <ModalWindow close={close} className={styles["bank-account"]}>
            <div className={styles["bank-account__container"]} onClick={(e) => {
                e.stopPropagation()
            }}>
                <h1>Информация о счете</h1>
                <img src={icon} alt={"null"}/>
                <p>{bank}</p>
                <p>{name}</p>
                <p>{amount} р</p>
                <div className={cn(styles["bank-account__info"])}>
                    <div className={styles["info"]} id={styles["number"] }>{number}</div>
                    <div className={styles["info"]} id={styles["date"]}>{date.toLocaleDateString().slice(0, 5)}</div>
                    <div className={styles["info"]} id={styles["cvc/ccv"]}>{cvv}</div>
                </div>

            </div>
        </ModalWindow>
    )
}

export default BankAccountModal