import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import About from '../components/About';
import NavLeft from '../components/NavLeft';
import euDev from '../images/eu-sorrindo.png';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <NavLeft />
      <main
        className="flex
      m-auto justify-around h-[calc(80vh-4rem)] items-center
       max-md:flex-col max-md: max-screen w-full"

      >
        <section className="max-md:w-[calc(65%)]  w-1/3 min-[1990px]:w-1/4">
          <img
            src={ euDev }
            alt="Jonathan Febraio"
            className="rounded-full mb-5"
          />
        </section>
        <section className="max-md:w-[calc(80%)]  w-1/2 pl-8">

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
      </main>
      <section className="mt-9">
        <About />
      </section>
    </div>
  );
}

export default Home;
