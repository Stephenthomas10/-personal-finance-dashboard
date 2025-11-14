
import React from 'react';
import { Screen } from '../App';
import { HomeIcon, ListBulletIcon, StarIcon, UserIcon } from './Icons';

interface BottomNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${
      isActive ? 'text-cred-accent' : 'text-cred-text-secondary-light dark:text-cred-text-secondary-dark'
    }`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: <HomeIcon /> },
    { id: 'transactions', label: 'Spends', icon: <ListBulletIcon /> },
    { id: 'rewards', label: 'Rewards', icon: <StarIcon /> },
    { id: 'profile', label: 'Profile', icon: <UserIcon /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-cred-light-card dark:bg-cred-card border-t border-cred-light-secondary dark:border-cred-secondary shadow-[0_-2px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_-2px_10px_rgba(0,0,0,0.5)] md:hidden">
      <div className="flex justify-around h-full">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            isActive={activeScreen === item.id}
            onClick={() => setActiveScreen(item.id as Screen)}
          />
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
