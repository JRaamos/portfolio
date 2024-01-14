import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggleButton from './ThemeToggleButton';
import Hamburger from './Hamburger';
import { useWindowSize } from '../hooks/useWindowSize';
import Lenguage from './Lenguage';

export default function Header() {
  const { t } = useTranslation();
  const [width] = useWindowSize();

  const handleLinkClick = (to: string) => {
    setTimeout(() => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView();
      }
    }, 100);
  };
  return (
    <div className="flex items-center shadow-md">
      <div
        className="h-14 w-full
        flex items-center justify-around"
      >
        <Link to="/" target="_blank">
          <div className="flex justify-evenly w-60">
            <p
              className="text-2xl font-mono hover:text-violet-900
              transition-all dark:hover:text-violet-600"
            >
              Jonathan Febraio
            </p>
          </div>
        </Link>
        {width < 768 ? (
          <Hamburger />
        ) : (
          <nav className="flex justify-between w-80">
            <Link to="/">
              <p
                className="border-b-4 hover:border-indigo-700
                  transition-all border-transparent"
              >
                {t('home')}
              </p>
            </Link>
            <Link
              to="/#about"
              onClick={ () => handleLinkClick('about') }
              className="border-b-4 hover:border-indigo-700
                  transition-all border-transparent"
            >
              {t('about')}
            </Link>
            <Link
              to="/#projects"
              onClick={ () => handleLinkClick('projects') }
              className="border-b-4 hover:border-indigo-700
                  transition-all border-transparent"
            >
              {t('project')}
            </Link>
            <Link
              to="/#contact"
              onClick={ () => handleLinkClick('contact') }
              className="border-b-4 hover:border-indigo-700
                  transition-all border-transparent"
            >
              {t('contact')}
            </Link>
          </nav>
        )}
      </div>
      {width > 768 && (
        <div className="flex justify-between w-52 mx-3 items-center">
          <Lenguage />
          <ThemeToggleButton />
        </div>
      )}
    </div>
  );
}
