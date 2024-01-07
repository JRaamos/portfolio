import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import PortfolioContext from '../context/PortfolioContext';

function ThemeToggleButton() {
  const { setTheme, theme } = useContext(PortfolioContext);

  return (
    <div>
      <button
        onClick={ () => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        } }
        type="button"
        aria-label="Toggle theme"
        className="w-12 h-12 flex items-center"
      >
        <FontAwesomeIcon
          icon={ theme === 'dark' ? faSun : faMoon }
          className="dark:text-amber-200 w-12 h-12 flex items-center
          hover:scale-110 transition-all"
        />
      </button>
    </div>
  );
}

export default ThemeToggleButton;
