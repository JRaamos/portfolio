/* eslint-disable react/jsx-max-depth */
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import NavLeft from '../components/NavLeft';
import euDev from '../images/eu-sorrindo.png';
import Projects from '../components/Projects';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      {/* <NavLeft /> */}
      <main>
        <section
          className="flex
      m-auto justify-around h-[calc(82vh)] items-center
       max-md:flex-col max-md: max-screen w-full max-[375px]:h-[calc(90vh)]"
        >
          <section
            className="max-md:w-[calc(65%)]  w-1/3 min-[1990px]:w-1/4
  "
          >
            <img
              src={ euDev }
              alt="Jonathan Febraio"
              className="rounded-full mb-5 "
            />
          </section>
          <section className="max-md:w-[calc(80%)]  w-1/2 pl-8  ">

            <p className="text-4xl font-mono font-bold text-center">
              {t('presentation')}
            </p>
            <p className="font-mono text-center text-xl">{t('introduction')}</p>
            <div className="flex p-2 w-full justify-center">
              <button
                className="mx-2  hadow-4xl bg-indigo-700 text-white  p-1
              rounded-lg w-36"
              >
                {t('button')}
              </button>
              <button
                className="mx-2 rounded-lg w-36  bg-indigo-700 text-white
               p-1"
              >
                {t('cv')}
              </button>
            </div>
          </section>
        </section>
        <section
          className="mt-28 border-t-2 border-gray-500
         dark:bg-slate-600 m-5"
          id="about"
        >
          <section className="flex justify-center">
            <h1 className="text-3xl font-mono font-bold m-5">{t('about')}</h1>
          </section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
      </main>

    </div>
  );
}

export default Home;
