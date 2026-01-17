import styles from "./Home.module.scss"
import {Footer} from "../../widgets";
import BankMiniCard from "../../widgets/BankMiniCard/BankMiniCard.tsx";
import {PlansCard} from "../../widgets";
import {getAmountIncome} from "../../entities/user/api/getAmountIncome.ts";
import {getAmountExpenses} from "../../entities/user/api/getAmountExpenses.ts";

function Home() {
    return <div className={styles["home"]}>
        <BankMiniCard/>
        <PlansCard getAmount={getAmountIncome} description={"Доходы"}/>
        <PlansCard getAmount={getAmountExpenses} description={"Расходы"}/>
        <Footer/>
    </div>
}

export default Home;