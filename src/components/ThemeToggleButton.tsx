import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faFutbol,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import PortfolioContext from '../context/PortfolioContext';
import br from '../images/br.png';
import ing from '../images/in.png';

function ThemeToggleButton() {
  const { setTheme, theme, language, setLanguage } = useContext(PortfolioContext);
  const { i18n } = useTranslation();

  return (
    <div className="flex justify-between w-52 mx-3">
      <div className="flex">
        <button
          type="button"
          className={ `w-12 h-12 flex items-center
           ${
             language === 'pt'
               ? 'bg-amber-200'
               : 'bg-gray-200 dark:bg-slate-900'
          } rounded-lg` }
          onClick={ () => {
            i18n.changeLanguage('pt');
            localStorage.setItem('language', 'pt');
            setLanguage('pt');
          } }
        >
          <img src={ br } alt="br" />
        </button>

        <button
          type="button"
          className={ `w-12 h-12 flex items-center
           ${
             language === 'en'
               ? 'bg-amber-200'
               : 'bg-gray-200 dark:bg-slate-900'
          } rounded-lg` }
          onClick={ () => {
            i18n.changeLanguage('en');
            localStorage.setItem('language', 'en');
            setLanguage('en');
          } }
        >
          <img src={ ing } alt="ing" />
        </button>
      </div>
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
