import { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PortfolioContext from '../context/PortfolioContext';
import ThemeToggleButton from './ThemeToggleButton';
import Lenguage from './Lenguage';

function HamburgerMenu() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useContext(PortfolioContext);

  const menuAnimation = isOpen ? 'animate-fadeIn' : 'animate-fadeOut';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuElement = document.getElementById('hamburger-menu');
      const buttonElement = document.getElementById('hamburger-button');

      if (isOpen && menuElement && !menuElement.contains(event.target as Node)
          && buttonElement && !buttonElement.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => window.removeEventListener('click', handleClickOutside);
  }, [isOpen, setIsOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        id="hamburger-button"
        onClick={ () => setIsOpen(!isOpen) }
        className="focus:outline-none"
        type="button"
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon
          icon={ isOpen ? faTimes : faBars }
          className="transition duration-300 transform hover:scale-125"
        />
      </button>

      <div
        id="hamburger-menu"
        className={ `${isOpen ? menuAnimation : 'hidden-menu'}
       absolute left-0 top-0 w-56 bg-slate-300 dark:bg-slate-700 shadow-lg h-[calc(100%)]
        flex flex-col items-start py-4` }
      >

        {isOpen && (
          <div
            className="absolute left-0 top-0 h-full
         w-60  flex flex-col items-center py-4"
          >
            <div className="flex w-52 justify-around">
              <Lenguage />
              <ThemeToggleButton />
            </div>

            <nav className=" mt-10 flex flex-col items-start">

              <button
                onClick={ () => {
                  navigate('/');
                  handleClick();
                } }
                aria-label="Voltar ao topo"
                className=" font-mono text-xl font-black
                  mb-[-2px]
                  border-b-4 hover:border-indigo-700
                  transition-all border-transparent"
              >
                {t('home')}
              </button>

              <a
                href="#about"
                className=" font-mono text-xl font-black
                   border-b-4 hover:border-indigo-700
                  transition-all border-transparent"
                onClick={ handleClick }
              >
                {t('about')}

              </a>
              <a
                href="#projects"
                className=" font-mono text-xl font-black
                border-b-4 hover:border-indigo-700
                  transition-all border-transparent
                "
                onClick={ handleClick }
              >
                {t('project')}

              </a>

              <a
                href="#contact"
                className=" font-mono text-xl font-black
                  border-b-4 hover:border-indigo-700
                  transition-all border-transparent "
                onClick={ handleClick }
              >
                {t('contact')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default HamburgerMenu;
