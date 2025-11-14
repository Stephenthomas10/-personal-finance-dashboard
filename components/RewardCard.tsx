
import React from 'react';
import { Reward, RewardStatus } from '../types';

interface RewardCardProps {
    reward: Reward;
}

const RewardCard: React.FC<RewardCardProps> = ({ reward }) => {
    const getStatusStyles = (status: RewardStatus) => {
        switch (status) {
            case RewardStatus.Available:
                return 'bg-cred-green/20 text-cred-green';
            case RewardStatus.Redeemed:
                return 'bg-cred-accent/20 text-cred-accent';
            case RewardStatus.Expired:
                return 'bg-cred-orange/20 text-cred-orange';
            default:
                return 'bg-gray-500/20 text-gray-500';
        }
    };
    
    return (
        <div className="bg-cred-light-card dark:bg-cred-card rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={reward.imageUrl} alt={reward.title} className="w-full h-32 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{reward.title}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusStyles(reward.status)}`}>
                        {reward.status}
                    </span>
                </div>
                <p className="text-sm text-cred-text-secondary-light dark:text-cred-text-secondary-dark mb-4">{reward.description}</p>
                {reward.status === RewardStatus.Available && (
                    <button className="w-full py-2 bg-cred-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transition-opacity">
                        Redeem for {reward.points} pts
                    </button>
                )}
            </div>
        </div>
    );
};

export default RewardCard;
