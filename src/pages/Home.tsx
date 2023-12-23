import React, { useContext } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import NavLeft from '../components/NavLeft';
import PortfolioContext from '../context/PortfolioContext';

function Home() {
  const { setIsOpen } = useContext(PortfolioContext);

  return (
    <div>
      <Header />
      <NavLeft />
      <About />
    </div>
  );
}

export default Home;
