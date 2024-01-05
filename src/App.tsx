import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PortfolioProvider from './context/PortfolioProvider';

function App() {
  return (
    <PortfolioProvider>
      <Routes>
        <Route path="/" element={ <Home /> } />
        {/* <Route path="/projects/:id" element={ <Projects /> } /> */}
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </PortfolioProvider>
  );
}

export default App;
