/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projectsDetails } from '../utils/projectsDetails';
import Carousel from '../components/Carousel';
import Skills from '../components/Skills';

function ProjectDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

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
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="h-[60vh] pt-20 mt-10 text-center">
          {isVisible && (
            <button
              onClick={ handleClick }
              aria-label="Voltar ao topo"
              className="fixed bottom-5 right-5 bg-indigo-700 text-white p-2
      rounded-xl w-10 hover:scale-125 transition-all"
            >
              <FontAwesomeIcon icon={ faArrowUp } />
            </button>
          )}
          <div className="flex justify-center items-center flex-col h-1/2">
            <p
              className="text-4xl font-serif
           font-semibold"
            >
              {projectsDetails[Number(id)].title}
            </p>
            <p
              className="border border-black w-16 h-1 m-auto my-5
             bg-indigo-700 rounded-xl"
            />
            <p className="text-center max-w-[80rem] mx-10">
              {t('detailsInto')}
              {projectsDetails[Number(id)].title}
              {' '}
              {t('detailsInto2')}
            </p>
            <Link to={ projectsDetails[Number(id)].linkSite } target="_blank">
              <button
                type="button"
                className="w-48 text-xl text-white mt-4 p-1 rounded-lg
                 bg-indigo-700 hover:scale-110 transition-all"
              >
                {t('siteLink')}
              </button>
            </Link>
          </div>
        </div>
        <div
          className=" flex items-center bg-[#c2c2c259]
       dark:bg-slate-800 flex-col pb-16"
        >
          <div className=" mt-10 shadow-2xl rounded-lg max-[840px]:w-[80%] w-[45rem] ">
            <Carousel id={ id } />
          </div>
          <h1 className="mt-16 text-2xl font-semibold">
            {t('detailsSubtitle')}
          </h1>
          <div className="w-full flex flex-col justify-center items-center font-mono  ">
            <p
              className="border border-black w-16 h-1 m-auto my-5
            bg-indigo-700 rounded-xl"
            />
            <p className="w-[60%] my-3">
              {t(`projects.project${id}.detailsText`)}
            </p>
            <p className="w-[60%] my-3">
              {t(`projects.project${id}.detailsText2`)}
            </p>
            <p className="w-[60%] my-3">
              {t(`projects.project${id}.detailsText3`)}
            </p>
          </div>
          <div className=" w-2/3 flex flex-col">
            <h1 className="mt-5 text-2xl font-semibold text-center">
              {t('detailsTech')}
            </h1>
            <p
              className="border border-black w-16 h-1 m-auto my-5
            bg-indigo-700 rounded-xl"
            />
            <div>
              <Skills skils={ projectsDetails[Number(id)].techs } />
            </div>
          </div>
          <div>
            <h1 className="mt-5 text-2xl font-semibold text-center">
              {t('detailsLinks')}
            </h1>
            <div className="flex max-[480px]:flex-col">
              <Link to={ projectsDetails[Number(id)].linkSite } target="_blank">
                <button
                  type="button"
                  className="w-48 text-xl text-white m-4 p-1 rounded-lg
                 bg-indigo-700 hover:scale-110 transition-all"
                >
                  {t('siteLink')}
                </button>
              </Link>
              <Link to={ projectsDetails[Number(id)].github } target="_blank">
                <button
                  type="button"
                  className="w-48 text-xl text-white m-4 p-1 rounded-lg
                 bg-indigo-700 hover:scale-110 transition-all"
                >
                  {t('detailsRepo')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default ProjectDetails;
