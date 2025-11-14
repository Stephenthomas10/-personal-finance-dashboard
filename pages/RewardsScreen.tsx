
import React, { useState, useEffect } from 'react';
import { Reward, RewardStatus } from '../types';
import { fetchRewards } from '../services/api';
import RewardCard from '../components/RewardCard';

const RewardsScreen: React.FC = () => {
    const [rewards, setRewards] = useState<Reward[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<RewardStatus | 'all'>('all');

    useEffect(() => {
        const loadRewards = async () => {
            setLoading(true);
            const data = await fetchRewards();
            setRewards(data);
            setLoading(false);
        };
        loadRewards();
    }, []);

    const filteredRewards = rewards.filter(r => filter === 'all' || r.status === filter);

    const filters: (RewardStatus | 'all')[] = ['all', RewardStatus.Available, RewardStatus.Redeemed, RewardStatus.Expired];

    return (
        <div className="p-4 md:p-6">
            <h1 className="text-3xl font-bold mb-6 text-cred-text-primary-light dark:text-cred-text-primary-dark">Rewards & Offers</h1>
            
            <div className="flex space-x-2 overflow-x-auto pb-4 mb-4">
                 {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                            filter === f
                                ? 'bg-cred-accent text-white'
                                : 'bg-cred-card dark:bg-cred-secondary text-cred-text-secondary-light dark:text-cred-text-secondary-dark'
                        }`}
                    >
                        {f === 'all' ? 'All' : f}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cred-accent"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRewards.map(reward => (
                        <RewardCard key={reward.id} reward={reward} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RewardsScreen;
