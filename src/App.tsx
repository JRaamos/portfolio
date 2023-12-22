import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import NotFound from './NotFound';

function App() {
  return (

    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/projects" element={ <Projects /> } />
      <Route path="/contacts" element={ <Contacts /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>

  );
}

export default App;
