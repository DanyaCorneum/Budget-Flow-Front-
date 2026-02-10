import {Exit, Footer} from "../../widgets";
import {Button} from "../../shared";
import styles from "./User.module.scss"

function User() {
    return (
        <div className={styles['user-page']}>
            <header>
                <h2>Добро пожаловать</h2>
                <Exit className={styles['exit']}/>
            </header>
            <main>
                <div className={styles["user-container"]}>
                    <img src="../../../src/assets/user.svg" alt={"null"}/>
                    <h3>Пользователь</h3>
                </div>
                <div className={styles["options"]}>
                    <Button className={styles["user-btn"]} id={styles["1"]}>
                        <div className={styles["btn__content"]}>
                            <img src={"../../../src/assets/ruble.svg"} alt={"img"}/>
                            <p>Счета</p>
                        </div>
                        <i className="bi bi-arrow-right-short"/> </Button>
                    <Button className={styles["user-btn"]} id={styles["2"]}>
                        <div className={styles["btn__content"]}>
                            <img src={"../../../src/assets/money.svg"} alt={"img"}/>
                            <p>Подключение счета</p>
                        </div>
                        <i className="bi bi-arrow-right-short"/>
                    </Button>
                    <Button className={styles["user-btn"]} id={styles["3"]}>
                        <div className={styles["btn__content"]}>
                            <img src={"../../../src/assets/data.svg"} alt={"img"}/>
                            <p>Данные</p>
                        </div>
                        <i className="bi bi-arrow-right-short"/>
                    </Button>
                    <Button className={styles["user-btn"]} id={styles["4"]}>
                        <div className={styles["btn__content"]}>
                            <img src={"../../../src/assets/bank.svg"} alt={"img"}/>
                            <p>Распределение по вкладам</p>
                        </div>
                        <i className="bi bi-arrow-right-short"/> </Button>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default User;