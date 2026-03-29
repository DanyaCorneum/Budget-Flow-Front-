import styles from "./Home.module.scss"
import { ExpensCard, Footer, GoalSlider, PlansCard,} from "../../widgets";
import {AddGoal, BankMiniCard, PieDiagram} from "../../features";
//import {useState} from "react";

function Home() {
    const segments = [
  { id: '1', percentage: 10, color: '#FF4545', label: 'Еда' },
  { id: '2', percentage: 15, color: '#FFD445', label: 'Транспорт' },
  { id: '3', percentage: 15, color: '#979797', label: 'Жилье' },
  {id: '4', percentage: 60, color: '#D9D9D9', label: 'Оставшийся бюджет'}];

  const expenseCards = [
    {
      id: '1',
      name: 'Продукты',
      expens_llimit: 15000,
      expens_rlimit: 20000,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 10.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM5.5 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm11.5 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-2.5-1.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM7.5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>',
      color: '#DF654F'
    },
    {
      id: '2',
      name: 'F',
      expens_llimit: 15000,
      expens_rlimit: 20000,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 10.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM5.5 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm11.5 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-2.5-1.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM7.5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>',
      color: '#DF654F'
    }
  ];

  return (<><div className={styles["home"]}>
        <p className={styles.separator}>Подключенные счета</p>
        <BankMiniCard/>
        <p className={styles.separator}>Планирование</p>
        <div className={styles.PlansCardContainer}>
        <PlansCard description="e" getAmount={() => 10000} color="blue"/>
        <PlansCard description="e" getAmount={() => 10000} color="blue"/>
        <PieDiagram segments={segments}/>
        </div>
        <div className={styles.expenseCardsContainer}>
          {expenseCards.map(card => (
            <ExpensCard
              key={card.id}
              name={card.name}
              expens_llimit={card.expens_llimit}
              expens_rlimit={card.expens_rlimit}
              icon={card.icon}
              color={card.color}
            />
          ))}
        </div>
        <p className={styles.separator}>Цели <AddGoal/></p>
        <GoalSlider />

    </div>
    <Footer/></>)
}

export default Home;