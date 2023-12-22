import React, { useState } from 'react';
import PortfolioContext from './PortfolioContext';
import { PortfolioProviderProps } from '../types/Portfolio.type';

function PortfolioProvider({ children }:
PortfolioProviderProps) {
  const [theme, setTheme] = useState('light');
  return (
    <PortfolioContext.Provider
      value={ {
        theme,
        setTheme,
      } }
    >
      { children }
    </PortfolioContext.Provider>
  );
}
export default PortfolioProvider;
