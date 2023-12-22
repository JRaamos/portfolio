import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import PortfolioProvider from './context/PortfolioProvider';
import About from './components/About';

function App() {
  return (
    <PortfolioProvider>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contacts /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </PortfolioProvider>

  );
}

export default App;
