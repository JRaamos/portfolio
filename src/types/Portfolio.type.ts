import { Dispatch, SetStateAction } from 'react';

export type PortfolioProviderProps = {
  children: React.ReactNode;
};

export type PortfolioContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>
};
