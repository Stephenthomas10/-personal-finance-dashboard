
import React from 'react';
import { Transaction } from '../types';

interface TransactionItemProps {
    transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
    const transactionDate = new Date(transaction.date);
    const formattedDate = transactionDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return (
        <div className="flex items-center justify-between bg-cred-light-card dark:bg-cred-card p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-4">
                <img src={transaction.logoUrl} alt={transaction.merchant} className="w-10 h-10 rounded-full bg-white object-contain p-1" />
                <div>
                    <p className="font-semibold">{transaction.merchant}</p>
                    <p className="text-sm text-cred-text-secondary-light dark:text-cred-text-secondary-dark">{formattedDate}</p>
                </div>
            </div>
            <p className="font-bold text-lg">-${transaction.amount.toFixed(2)}</p>
        </div>
    );
};

export default TransactionItem;
