
export interface User {
  name: string;
  email: string;
  avatarUrl: string;
  maskedCardNumber: string;
}

export interface CreditScore {
  score: number;
  status: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  lastUpdated: string;
}

export enum TransactionCategory {
  Food = 'Food',
  Shopping = 'Shopping',
  Bills = 'Bills',
  Travel = 'Travel',
  Entertainment = 'Entertainment',
  Health = 'Health',
  Other = 'Other'
}

export interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  date: string;
  category: TransactionCategory;
  logoUrl: string;
}

export enum RewardStatus {
  Available = 'Available',
  Redeemed = 'Redeemed',
  Expired = 'Expired'
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  status: RewardStatus;
  imageUrl: string;
}

export interface Offer {
    id: string;
    title: string;
    description: string;
    brand: string;
    imageUrl: string;
}

export interface FinanceSummary {
    totalOutstanding: number;
    currentMonthSpend: number;
    nextBillDueDate: string;
    rewardPoints: number;
}
