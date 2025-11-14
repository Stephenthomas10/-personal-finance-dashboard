
import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { fetchUser } from '../services/api';
import { useTheme } from '../hooks/useTheme';

const ProfileScreen: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        fetchUser().then(setUser);
    }, []);

    if (!user) {
        return <div className="p-4">Loading...</div>;
    }

    return (
        <div className="p-4 md:p-6 max-w-2xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
                <img src={user.avatarUrl} alt={user.name} className="w-20 h-20 rounded-full" />
                <div>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-cred-text-secondary-light dark:text-cred-text-secondary-dark">{user.email}</p>
                </div>
            </div>

            <div className="bg-cred-light-card dark:bg-cred-card rounded-xl shadow-md divide-y divide-cred-light-secondary dark:divide-cred-secondary">
                <div className="p-4 flex justify-between items-center">
                    <span className="font-medium">Card Number</span>
                    <span className="text-cred-text-secondary-light dark:text-cred-text-secondary-dark font-mono">{user.maskedCardNumber}</span>
                </div>
                <div className="p-4 flex justify-between items-center">
                    <span className="font-medium">Dark Mode</span>
                     <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cred-accent"></div>
                    </label>
                </div>
                 <div className="p-4 flex justify-between items-center">
                    <span className="font-medium">Enable Notifications</span>
                     <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cred-accent"></div>
                    </label>
                </div>
                 <div className="p-4 flex justify-between items-center">
                    <span className="font-medium">Payment Reminders</span>
                     <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cred-accent"></div>
                    </label>
                </div>
            </div>
             <button className="w-full mt-8 py-3 bg-cred-accent text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-opacity">
                Log Out
            </button>
        </div>
    );
};

export default ProfileScreen;
