import React, { useState, useEffect } from 'react';

const DarkLight = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="absolute top-20 right-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-md"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
}

export default DarkLight;
