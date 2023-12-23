import React, { useEffect, useState } from 'react';
import PortfolioContext from './PortfolioContext';
import { PortfolioProviderProps } from '../types/Portfolio.type';

function PortfolioProvider({ children }:
PortfolioProviderProps) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');
  const [language, setLanguage] = useState(localStorage.getItem('language') ?? 'pt');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    const removeOldTheme = theme === 'dark' ? 'light' : 'dark';

    root.classList.remove(removeOldTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <PortfolioContext.Provider
      value={ {
        theme,
        setTheme,
        language,
        setLanguage,
        isOpen,
        setIsOpen,
      } }
    >
      { children }
    </PortfolioContext.Provider>
  );
}
export default PortfolioProvider;
