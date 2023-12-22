import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import PortfolioContext from '../context/PortfolioContext';

function ThemeToggleButton() {
  const { setTheme, theme } = useContext(PortfolioContext);

  return (
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
        size="2x"
        className="dark:text-slate-200"
      />
    </button>
  );
}

export default ThemeToggleButton;
