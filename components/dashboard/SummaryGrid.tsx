
import React from 'react';
import { FinanceSummary } from '../../types';

interface SummaryGridProps {
    summary: FinanceSummary;
}

const SummaryCard: React.FC<{ title: string; value: string | number; accent?: 'green' | 'orange' }> = ({ title, value, accent }) => {
    const valueColor = accent === 'green' ? 'text-cred-green' : accent === 'orange' ? 'text-cred-orange' : '';
    
    return (
        <div className="bg-cred-light-card dark:bg-cred-card p-4 rounded-xl shadow-md flex-1">
            <p className="text-sm text-cred-text-secondary-light dark:text-cred-text-secondary-dark">{title}</p>
            <p className={`text-xl font-bold ${valueColor}`}>{value}</p>
        </div>
    );
};


const SummaryGrid: React.FC<SummaryGridProps> = ({ summary }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <SummaryCard title="This Month's Spend" value={`$${summary.currentMonthSpend.toLocaleString()}`} />
            <SummaryCard title="Reward Points" value={summary.rewardPoints.toLocaleString()} accent="green" />
            <SummaryCard title="Next Bill Due" value={new Date(summary.nextBillDueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} accent="orange" />
        </div>
    );
};

export default SummaryGrid;
