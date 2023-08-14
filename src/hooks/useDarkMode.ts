import React, { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState<boolean>(
    Boolean(localStorage.getItem('theme'))
  );

  const handleChangeTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.removeItem('theme');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return { theme, handleChangeTheme };
};

export default useDarkMode;
