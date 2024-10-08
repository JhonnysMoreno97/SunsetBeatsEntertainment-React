import React from 'react';
import '../styles/ToggleButton.css';

export const ToggleButton = ({ setTheme, theme }) => {
    const handleToggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button id="toggle-dark-mode" onClick={handleToggle}>
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
};
