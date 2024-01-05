import React, { useContext } from 'react';

import { useTranslation } from 'react-i18next';
import br from '../images/br.png';
import ing from '../images/in.png';
import PortfolioContext from '../context/PortfolioContext';

function Lenguage() {
  const { language, setLanguage } = useContext(PortfolioContext);
  const { i18n } = useTranslation();

  return (
    <div className="flex">
      <button
        type="button"
        className={ `w-12 h-12 flex items-center mr-3
           ${
             language === 'pt'
               ? 'bg-amber-200 hover:scale-110 transition-all'
               : 'hover:scale-110 transition-all'
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
               ? 'bg-amber-200 hover:scale-110 transition-all'
               : 'hover:scale-110 transition-all'
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
  );
}
export default Lenguage;
