
import React from 'react';
import { CreditScore, Offer } from '../../types';

const CreditScoreCard: React.FC<{ score: CreditScore }> = ({ score }) => (
    <div className="flex-shrink-0 w-48 h-full bg-cred-accent p-4 rounded-xl shadow-lg text-white flex flex-col justify-between">
        <div>
            <p className="font-semibold">Credit Score</p>
            <p className="text-4xl font-bold">{score.score}</p>
        </div>
        <p className="text-sm opacity-80">{score.status}</p>
    </div>
);

const OfferCard: React.FC<{ offer: Offer }> = ({ offer }) => (
    <div className="flex-shrink-0 w-48 h-full bg-cred-light-card dark:bg-cred-card p-4 rounded-xl shadow-md flex flex-col justify-between">
        <div>
            <p className="font-semibold text-sm text-cred-text-secondary-light dark:text-cred-text-secondary-dark">{offer.brand}</p>
            <p className="font-bold text-md text-cred-text-primary-light dark:text-cred-text-primary-dark">{offer.title}</p>
        </div>
        <p className="text-xs text-cred-text-secondary-light dark:text-cred-text-secondary-dark">{offer.description}</p>
    </div>
);


interface HorizontalCardScrollerProps {
    creditScore: CreditScore | null;
    offers: Offer[];
}

const HorizontalCardScroller: React.FC<HorizontalCardScrollerProps> = ({ creditScore, offers }) => {
    return (
        <div className="flex space-x-4 overflow-x-auto pb-4 h-32">
            {creditScore && <CreditScoreCard score={creditScore} />}
            {offers.map(offer => (
                <OfferCard key={offer.id} offer={offer} />
            ))}
        </div>
    );
};

export default HorizontalCardScroller;
