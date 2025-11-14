
import React, { useEffect, useState } from 'react';
import { User, FinanceSummary, CreditScore, Offer, Transaction } from '../types';
import { fetchUser, fetchFinanceSummary, fetchCreditScore, fetchOffers, fetchTransactions } from '../services/api';
import Header from '../components/dashboard/Header';
import SummaryGrid from '../components/dashboard/SummaryGrid';
import HorizontalCardScroller from '../components/dashboard/HorizontalCardScroller';
import RecentTransactions from '../components/dashboard/RecentTransactions';

const DashboardScreen: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [summary, setSummary] = useState<FinanceSummary | null>(null);
    const [creditScore, setCreditScore] = useState<CreditScore | null>(null);
    const [offers, setOffers] = useState<Offer[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const [userData, summaryData, scoreData, offersData, transactionsData] = await Promise.all([
                    fetchUser(),
                    fetchFinanceSummary(),
                    fetchCreditScore(),
                    fetchOffers(),
                    fetchTransactions()
                ]);
                setUser(userData);
                setSummary(summaryData);
                setCreditScore(scoreData);
                setOffers(offersData);
                setTransactions(transactionsData.slice(0, 5)); // Show only first 5
            } catch (error) {
                console.error("Failed to load dashboard data", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cred-accent"></div>
            </div>
        );
    }
    
    if (!user || !summary) {
        return <div className="p-4 text-center">Failed to load data. Please try again later.</div>;
    }

    return (
        <div className="p-4 md:p-6 space-y-6">
            <Header user={user} totalOutstanding={summary.totalOutstanding} />
            <SummaryGrid summary={summary} />
            <HorizontalCardScroller creditScore={creditScore} offers={offers} />
            <RecentTransactions transactions={transactions} />
        </div>
    );
};

export default DashboardScreen;
