
import React from 'react';
import { User } from '../../types';

interface HeaderProps {
  user: User;
  totalOutstanding: number;
}

const Header: React.FC<HeaderProps> = ({ user, totalOutstanding }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-lg text-cred-text-secondary-light dark:text-cred-text-secondary-dark">Hello, {user.name.split(' ')[0]}</p>
        <p className="text-2xl font-bold">
          <span className="text-cred-text-secondary-light dark:text-cred-text-secondary-dark font-normal">Total Due:</span> ${totalOutstanding.toLocaleString()}
        </p>
      </div>
      <img src={user.avatarUrl} alt={user.name} className="w-12 h-12 rounded-full border-2 border-cred-accent" />
    </div>
  );
};

export default Header;
