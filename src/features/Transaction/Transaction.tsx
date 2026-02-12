import React from 'react';
import './transaction.scss';

interface TransactionProps {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
  type: 'income' | 'expense'; // 'income' для дохода, 'expense' для расхода
}

const Transaction: React.FC<TransactionProps> = ({
  amount,
  description,
  category,
  date,
  type
}) => {
  const amountClass = type === 'income' ? 'amount-income' : 'amount-expense';
  const amountSign = type === 'income' ? '+' : '-';

  return (
    <div className="transaction-item">
      <div className="transaction-header">
        <div className="transaction-info">
          <div className="transaction-description">{description}</div>
          <div className="transaction-category">{category}</div>
        </div>
        <div className={`transaction-amount ${amountClass}`}>
          {amountSign}{amount.toFixed(2)}
        </div>
      </div>
      <div className="transaction-footer">
        <div className="transaction-date">{date}</div>
      </div>
    </div>
  );
};

export default Transaction;