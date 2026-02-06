import { Footer } from '../../widgets';
import styles from './Other.module.scss';

function Other() {
  const teamMembers = [
    { name: "Морозов Николай Андреевич", role: "Frontend-developer / designer", link:"https://github.com/R1d3rm" },
    { name: "Ратков Даниил Евгеньевич", role: "Frontend-developer", link:"https://github.com/DanyaCorneum" },
    { name: "Горячев Вадим Дмитриевич", role: "Backend-developer", link:"https://github.com/hate0me" },
    { name: "Сухарев Иван Владимирович", role: "Backend-developer", link:"https://vk.com/regalos" },
    { name: "Морозов Кирилл Сергеевич", role: "DevOps", link: "https://vk.com/hm_m_k_s"},
    { name: "Кандинский Марк Кириллович", role: "Аналитик", link: "https://vk.com/kandinsky2017"}
  ];

  return (<>
   <div className={styles.container}>
      <h1 className={styles.title}>О нас</h1>
      
      <div className={styles.grid}>
        {teamMembers.map((member, index) => (
          <a 
            key={index} 
            href={member.link.trim()} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.avatar}>👤</div>
            <h2 className={styles.name}>{member.name}</h2>
            <p className={styles.role}>{member.role}</p>
          </a>
        ))}
      </div>
      <p className={styles.description}>Проект “Умный бюджет” создан в учебных целях. Проект должен содержать:  настройка бюджета пользователь задаёт категории и лимиты проценты; синхронизация сервис периодически подтягивает транзакции из псевдо-банка (локальный мок-API) по месяцу; повторные вызовы не дублируют операции. Классификация правила если мерчант MCC текст категория ; пользователь может переопределить категорию. Мониторинг дашборд факт vs план , топ расходов, предупреждения при 80% 100%.</p>
    </div>
    <Footer/>
    </>
  );
}

export default Other;