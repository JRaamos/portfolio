import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import PortfolioContext from '../context/PortfolioContext';

function ThemeToggleButton() {
  const { setTheme, theme, language, setLanguage } = useContext(PortfolioContext);
  const { i18n } = useTranslation();

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
          className="dark:text-amber-200 w-12 h-12 flex items-center"
        />
      </button>
    </div>
  );
}

export default ThemeToggleButton;
