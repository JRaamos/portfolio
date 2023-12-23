import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import About from '../components/About';
import NavLeft from '../components/NavLeft';
import PortfolioContext from '../context/PortfolioContext';
import euDev from '../images/eu-sorrindo.png';
import { useWindowSize } from '../hooks/useWindowSize';

function Home() {
  const { setIsOpen } = useContext(PortfolioContext);
  const { t } = useTranslation();
  const [width] = useWindowSize();

  return (
    <div>
      <Header />
      <NavLeft />
      <main
        className={ `flex
      m-auto justify-around h-[calc(80vh-4rem)] items-center
      ${width < 768 ? 'flex-col-reverse justify-center max-screen mt-9'
          : 'flex-row max-w-screen-2xl  w-full '}
      ` }
      >
        <section className={ `${width < 768 ? 'w-[calc(86%)] pl-14' : 'w-1/2 pl-14'}` }>

          <p className="text-3xl font-mono">{t('presentation')}</p>
          <p className="font-mono">{t('introduction')}</p>
          <div className="flex p-2 w-full justify-center">
            <button
              className="mx-2  hadow-4xl bg-amber-400 dark:text-slate-900 p-1 rounded-lg"
            >
              {t('button')}

            </button>
            <button
              className="mx-2   rounded-lg
              bg-amber-400 dark:text-slate-900 p-1"
            >
              {t('cv')}

            </button>
          </div>
        </section>
        <section className={ `${width < 768 ? 'w-[calc(70%)] ' : 'w-1/3'}` }>
          <img
            src={ euDev }
            alt="Jonathan Febraio"
            className="rounded-full"
          />
        </section>
      </main>
      <About />
    </div>
  );
}

export default Home;
