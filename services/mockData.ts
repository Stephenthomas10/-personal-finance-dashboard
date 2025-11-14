
import { User, CreditScore, Transaction, TransactionCategory, Reward, RewardStatus, Offer, FinanceSummary } from '../types';

export const mockUser: User = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  maskedCardNumber: '**** **** **** 1234',
};

export const mockCreditScore: CreditScore = {
  score: 780,
  status: 'Excellent',
  lastUpdated: '2024-07-20',
};

export const mockFinanceSummary: FinanceSummary = {
    totalOutstanding: 1250.75,
    currentMonthSpend: 850.20,
    nextBillDueDate: '2024-08-15',
    rewardPoints: 12500,
};

export const mockTransactions: Transaction[] = [
  { id: '1', merchant: 'Starbucks', amount: 5.75, date: '2024-07-21', category: TransactionCategory.Food, logoUrl: 'https://logo.clearbit.com/starbucks.com' },
  { id: '2', merchant: 'Amazon', amount: 124.99, date: '2024-07-20', category: TransactionCategory.Shopping, logoUrl: 'https://logo.clearbit.com/amazon.com' },
  { id: '3', merchant: 'Netflix', amount: 15.99, date: '2024-07-19', category: TransactionCategory.Entertainment, logoUrl: 'https://logo.clearbit.com/netflix.com' },
  { id: '4', merchant: 'Uber', amount: 22.50, date: '2024-07-18', category: TransactionCategory.Travel, logoUrl: 'https://logo.clearbit.com/uber.com' },
  { id: '5', merchant: 'AT&T', amount: 85.00, date: '2024-07-15', category: TransactionCategory.Bills, logoUrl: 'https://logo.clearbit.com/att.com' },
  { id: '6', merchant: 'Whole Foods', amount: 78.32, date: '2024-07-14', category: TransactionCategory.Food, logoUrl: 'https://logo.clearbit.com/wholefoodsmarket.com' },
  { id: '7', merchant: 'CVS Pharmacy', amount: 34.12, date: '2024-07-12', category: TransactionCategory.Health, logoUrl: 'https://logo.clearbit.com/cvs.com' },
  { id: '8', merchant: 'Delta Airlines', amount: 450.00, date: '2024-07-10', category: TransactionCategory.Travel, logoUrl: 'https://logo.clearbit.com/delta.com' },
];

export const mockRewards: Reward[] = [
  { id: '1', title: 'Free Coffee', description: 'Redeem for a free coffee at Starbucks', points: 1000, status: RewardStatus.Available, imageUrl: 'https://picsum.photos/seed/coffee/400/200' },
  { id: '2', title: '$10 Amazon Gift Card', description: 'Get a $10 gift card for your next purchase', points: 2500, status: RewardStatus.Available, imageUrl: 'https://picsum.photos/seed/amazon/400/200' },
  { id: '3', title: 'Movie Ticket', description: 'One free movie ticket at AMC', points: 1500, status: RewardStatus.Redeemed, imageUrl: 'https://picsum.photos/seed/movie/400/200' },
  { id: '4', title: '50% off Zomato', description: 'Get 50% off on your next order', points: 500, status: RewardStatus.Expired, imageUrl: 'https://picsum.photos/seed/zomato/400/200' },
];

export const mockOffers: Offer[] = [
    { id: '1', title: '20% off Nike', description: 'On select running shoes', brand: 'Nike', imageUrl: 'https://picsum.photos/seed/nike/400/200' },
    { id: '2', title: '15% Cashback', description: 'At your favorite restaurants', brand: 'Dining', imageUrl: 'https://picsum.photos/seed/dining/400/200' },
    { id: '3', title: 'Buy 1 Get 1 Free', description: 'On all movie tickets this weekend', brand: 'AMC Theatres', imageUrl: 'https://picsum.photos/seed/amc/400/200' },
];
