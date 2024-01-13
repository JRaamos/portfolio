import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PortfolioProvider from './context/PortfolioProvider';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <PortfolioProvider>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/project/:id" element={ <ProjectDetails /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </PortfolioProvider>
  );
}

export default App;
