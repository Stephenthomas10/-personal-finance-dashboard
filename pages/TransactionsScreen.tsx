
import React, { useState, useEffect, useMemo } from 'react';
import { Transaction, TransactionCategory } from '../types';
import { fetchTransactions } from '../services/api';
import TransactionItem from '../components/TransactionItem';

const TransactionsScreen: React.FC = () => {
    const [allTransactions, setAllTransactions] = useState<Transaction[]>([]);
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<TransactionCategory | 'all'>('all');

    useEffect(() => {
        const loadTransactions = async () => {
            setLoading(true);
            const data = await fetchTransactions();
            setAllTransactions(data);
            setFilteredTransactions(data);
            setLoading(false);
        };
        loadTransactions();
    }, []);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredTransactions(allTransactions);
        } else {
            setFilteredTransactions(allTransactions.filter(t => t.category === selectedCategory));
        }
    }, [selectedCategory, allTransactions]);

    const categories = useMemo(() => ['all', ...Object.values(TransactionCategory)], []);

    return (
        <div className="p-4 md:p-6">
            <h1 className="text-3xl font-bold mb-6 text-cred-text-primary-light dark:text-cred-text-primary-dark">Transactions</h1>
            
            <div className="flex space-x-2 overflow-x-auto pb-4 mb-4">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category as TransactionCategory | 'all')}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                            selectedCategory === category
                                ? 'bg-cred-accent text-white'
                                : 'bg-cred-card dark:bg-cred-secondary text-cred-text-secondary-light dark:text-cred-text-secondary-dark'
                        }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {loading ? (
                 <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cred-accent"></div>
                </div>
            ) : (
                <div className="space-y-3">
                    {filteredTransactions.map(transaction => (
                        <TransactionItem key={transaction.id} transaction={transaction} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TransactionsScreen;
