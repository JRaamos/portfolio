/* eslint-disable react/jsx-max-depth */
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import About from '../components/About';
import euDev from '../images/eu-sorrindo.png';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const { t } = useTranslation();
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const handleScroll = () => {
    const { scrollY } = window;

    if (scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section
          className="flex
      m-auto justify-around h-[calc(83vh)] items-center
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

            <p className="text-4xl font-mono font-bold text-center m-10">
              {t('presentation')}
            </p>
            <p className="font-mono text-center text-xl">{t('introduction')}</p>
            <div className="flex p-2 w-full justify-center">
              <button
                className="mx-4  hadow-4xl bg-indigo-700 text-white  p-1
              rounded-lg w-36 hover:scale-125 transition-all"
              >
                {t('button')}
              </button>
              <button
                className="mx-2 rounded-lg w-36  bg-indigo-700 text-white
               p-1 hover:scale-125 transition-all"
              >
                {t('cv')}
              </button>
            </div>
          </section>
        </section>
        {
  isVisible && (
    <button
      onClick={ handleClick }
      aria-label="Voltar ao topo"
      className="fixed bottom-5 right-5 bg-indigo-700 text-white p-2
      rounded-xl w-10 hover:scale-125 transition-all"
    >
      <FontAwesomeIcon icon={ faArrowUp } />
    </button>
  )
}
        <section
          className="mt-28  flex flex-col justify-center items-center
          bg-[#c2c2c259] dark:bg-slate-800"
          id="about"
        >
          <section className="w-1/2">
            <h1
              className="text-4xl font-serif font-bold mt-5
            text-center"
            >
              {t('about')}
            </h1>
            <p
              className="border border-black w-16 h-1 m-auto my-5
             bg-indigo-700 rounded-xl"
            />
            <p className="text-center my-5">
              {t('aboutSubTitle')}
            </p>
          </section>
          <About />
        </section>
        <section
          className="flex flex-col justify-center items-center mt-5"
          id="projects"
        >
          <section className="w-1/2">
            <h1
              className="text-4xl font-serif font-bold
            text-center"
            >
              {t('projectPageTitle')}

            </h1>

            <p
              className="border border-black w-16 h-1 m-auto my-5
             bg-indigo-700 rounded-xl"
            />
            <p className="text-center my-5">
              {t('projetctsSubTitle')}
            </p>

          </section>
          <section className="w-full">
            <Projects />
          </section>
        </section>
        <section
          className="flex flex-col justify-center items-center mt-5
          bg-[#c2c2c259] dark:bg-slate-800"
          id="contact"
        >
          <section className="w-1/2">
            <h1
              className="text-4xl font-serif font-bold
            text-center mt-7"
            >
              {t('contact')}
            </h1>

            <p
              className="border border-black w-16 h-1 m-auto my-7
             bg-indigo-700 rounded-xl"
            />
            <p className="text-center my-5">
              {t('contactSubTitle')}
            </p>

          </section>
          <section className="w-full">
            <Contacts />
          </section>
        </section>
      </main>
      <footer className="w-full mt-5">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
