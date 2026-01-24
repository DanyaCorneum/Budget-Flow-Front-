import styles from "./Home.module.scss"
import {AddGoal, Footer, GoalCard} from "../../widgets";
import BankMiniCard from "../../widgets/BankMiniCard/BankMiniCard.tsx";
import {PlansCard} from "../../widgets";
import {getAmountIncome} from "../../entities/user/api/getAmountIncome.ts";
import {getAmountExpenses} from "../../entities/user/api/getAmountExpenses.ts";

function Home() {
    return <div className={styles["home"]}>
        <BankMiniCard/>
        <PlansCard color={"blue"} getAmount={getAmountIncome} description={"Доходы"}/>
        <PlansCard color={"orange"} getAmount={getAmountExpenses} description={"Расходы"}/>
        <AddGoal/>
        <GoalCard/>
        <Footer/>
    </div>
}

export default Home;