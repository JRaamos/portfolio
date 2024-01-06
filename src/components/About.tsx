import React from 'react';
import { useTranslation } from 'react-i18next';
import Skills from './Skills';

function About() {
  const { t } = useTranslation();

  return (
    <div
      className=" w-full flex max-lg:flex-col justify-evenly"
    >
      <div
        className="flex flex-col
       items-center justify-center w-[90vh] max-2xl:w-[65%]
        m-11 max-lg:w-[100%] max-lg:m-0"
      >

        <section
          className="flex flex-col justify-center max-2xl:w-[70vh]
          max-xl:w-[60vh] max-lg:w-[90%]
           w-full"
        >
          <h2 className="text-3xl font-semibold font-serif">
            {t('aboutTextInto')}
          </h2>

          <div className="my-4">
            {/* <p className="text-xl italic font-semibold w-full">{t('aboutTextInto')}</p> */}
            <p className=" w-full font-mono text-lg">{t('aboutText')}</p>
            {/* <div className=" my-4">
            <p className="text-xl italic font-semibold  w-full">{t('aboutCareerInto')}</p>
            <p className=" w-full font-mono text-lg">{t('aboutTextCarrer')}</p>
          </div> */}
            {/* <div className=" my-4"> */}
            {/* <p className="text-xl italic font-semibold  w-full">
              {t('aboutExperienceInto')}
            </p> */}
            <p className=" w-full font-mono text-lg mt-2">{t('aboutTextExperience')}</p>
            {/* </div> */}
            {/* <div className=" my-4"> */}
            {/* <p className="text-xl italic font-semibold  w-full">
              {t('aboutObjectivesInto')}
            </p> */}
            <p className=" w-full font-mono text-lg mt-2">{t('aboutTextObjectives')}</p>
            {/* </div> */}
            {/* <div className="my-4">
            <p className="text-xl italic font-semibold  w-full">
              {t('aboutcuriosityInto')}
            </p>
            <p className=" w-full font-mono text-lg">{t('aboutTextCuriosity')}</p>
          </div> */}
          </div>

          <div
            className="flex justify-center items-center mt-4
       mb-16 flex-col max-lg:mb-0"
          >
            <p className="font-mono text-lg italic ">{t('conect')}</p>
            <button
              className=" w-44 hadow-4xl  bg-indigo-700
             text-slate-200 p-1 rounded-xl h-12 mt-6 hover:scale-125 transition-all"
            >
              {t('button')}

            </button>
          </div>
        </section>
      </div>
      <section className="w-[67vh] m-11 max-lg:w-[95%] mx-6">
        <h2 className="mx-5 font-serif font-semibold text-3xl">
          Skills
        </h2>
        <section
          className=" max-2xl:w-[95%]
           max-lg:w-[100%]
"
        >
          <Skills />
        </section>
      </section>

    </div>
  );
}
export default About;
