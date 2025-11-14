
import React from 'react';
import { Transaction } from '../../types';
import TransactionItem from '../TransactionItem';

interface RecentTransactionsProps {
    transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Recent Spends</h2>
            <div className="space-y-3">
                {transactions.map(transaction => (
                   <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
            </div>
        </div>
    );
};

export default RecentTransactions;
