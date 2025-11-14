
import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import DashboardScreen from './pages/DashboardScreen';
import TransactionsScreen from './pages/TransactionsScreen';
import RewardsScreen from './pages/RewardsScreen';
import ProfileScreen from './pages/ProfileScreen';
import BottomNav from './components/BottomNav';

export type Screen = 'dashboard' | 'transactions' | 'rewards' | 'profile';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'transactions':
        return <TransactionsScreen />;
      case 'rewards':
        return <RewardsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <ThemeProvider>
      <div className="bg-cred-light dark:bg-cred-dark min-h-screen text-cred-text-primary-light dark:text-cred-text-primary-dark font-sans transition-colors duration-300">
        <main className="pb-24">
          {renderScreen()}
        </main>
        <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      </div>
    </ThemeProvider>
  );
};

export default App;
