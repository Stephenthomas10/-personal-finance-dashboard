
import { User, CreditScore, Transaction, Reward, Offer, FinanceSummary } from '../types';
import { mockUser, mockCreditScore, mockTransactions, mockRewards, mockOffers, mockFinanceSummary } from './mockData';

const API_DELAY = 500; // Simulate network latency

export const fetchUser = (): Promise<User> => {
  return new Promise(resolve => setTimeout(() => resolve(mockUser), API_DELAY));
};

export const fetchCreditScore = (): Promise<CreditScore> => {
  return new Promise(resolve => setTimeout(() => resolve(mockCreditScore), API_DELAY));
};

export const fetchTransactions = (): Promise<Transaction[]> => {
  return new Promise(resolve => setTimeout(() => resolve(mockTransactions), API_DELAY));
};

export const fetchRewards = (): Promise<Reward[]> => {
  return new Promise(resolve => setTimeout(() => resolve(mockRewards), API_DELAY));
};

export const fetchOffers = (): Promise<Offer[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockOffers), API_DELAY));
};

export const fetchFinanceSummary = (): Promise<FinanceSummary> => {
    return new Promise(resolve => setTimeout(() => resolve(mockFinanceSummary), API_DELAY));
};
