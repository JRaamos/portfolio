import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggleButton from './ThemeToggleButton';
import Hamburger from './Hamburger';
import { useWindowSize } from '../hooks/useWindowSize';
import Lenguage from './Lenguage';

export default function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const [width] = useWindowSize();

  return (
    <div className="flex items-center shadow-md">
      <div
        className="h-14 w-full
        flex items-center justify-around"
      >
        <div className="flex justify-evenly w-60">
          <p className="text-2xl font-mono ">Jonathan Febraio</p>
        </div>

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

            {location.pathname === '/' && (
              <a
                href="#about"
                className="border-b-4 hover:border-indigo-700
                  transition-all border-transparent"
              >
                {t('about')}
              </a>
            )}

            <a
              href="#projects"
              className="border-b-4 hover:border-indigo-700
                  transition-all border-transparent"
            >
              {t('project')}
            </a>
            <a
              href="#contact"
              className="border-b-4 hover:border-indigo-700
                  transition-all border-transparent"
            >
              {t('contact')}
            </a>
          </nav>
        )}
      </div>
      {width > 768 && (
        <div className="flex justify-between w-52 mx-3">
          <Lenguage />
          <ThemeToggleButton />
        </div>
      )}
    </div>
  );
}
