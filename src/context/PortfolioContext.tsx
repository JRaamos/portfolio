import { createContext } from 'react';
import { PortfolioContextType } from '../types/Portfolio.type';

const PortfolioContext = createContext<PortfolioContextType>({} as PortfolioContextType);
export default PortfolioContext;
