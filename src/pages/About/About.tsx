import  { useState } from 'react';
import Transaction from '../../features/Transaction/Transaction';
import SearchBar from '../../widgets/searcher/searcher';
import styles from './About.module.scss';
import { Footer } from '../../widgets';

function About() {
  const [searchKeyword, setSearchKeyword] = useState('');

  // Пример данных для транзакций
  const transactions = [
    {
      id: '1',
      amount: 1250.75,
      description: 'Зарплата за январь',
      category: 'Доход',
      date: '15 янв. 2026',
      type: 'income'
    },
    {
      id: '2',
      amount: 89.90,
      description: 'Продукты в магазине',
      category: 'Еда',
      date: '18 янв. 2026',
      type: 'expense'
    },
    {
      id: '3',
      amount: 299.99,
      description: 'Подписка на сервис',
      category: 'Развлечения',
      date: '20 янв. 2026',
      type: 'expense'
    },
    {
      id: '4',
      amount: 1500.00,
      description: 'Бонус от компании',
      category: 'Доход',
      date: '22 янв. 2026',
      type: 'income'
    }
  ];

  // Фильтрация транзакций по ключевому слову
  const filteredTransactions = transactions.filter(transaction => 
    transaction.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (<>
    <div className={styles['about-page']}>
      <h1>История транзакций</h1>
      <SearchBar 
        keyword={searchKeyword} 
        onChange={setSearchKeyword} 
      />
      <div className={styles['transactions-container']}>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map(transaction => (
            <Transaction
              key={transaction.id}
              id={transaction.id}
              amount={transaction.amount}
              description={transaction.description}
              category={transaction.category}
              date={transaction.date}
              type={transaction.type}
            />
          ))
        ) : (
          <p>Транзакции не найдены</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;