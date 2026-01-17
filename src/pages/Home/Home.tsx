import styles from "./Home.module.scss"
import {Footer} from "../../widgets";
import BankMiniCard from "../../widgets/BankMiniCard/BankMiniCard.tsx";
import {PlansCard} from "../../widgets";
import {getAmountIncome} from "../../features/user/api/getAmountIncome.ts";
import {getAmountExpenses} from "../../features/user/api/getAmountExpenses.ts";

function Home() {
    return <div className={styles["home"]}>
        <BankMiniCard/>
        <PlansCard getAmount={getAmountIncome} description={"Доходы"}/>
        <PlansCard getAmount={getAmountExpenses} description={"Расходы"}/>
        <Footer/>
    </div>
}

export default Home;