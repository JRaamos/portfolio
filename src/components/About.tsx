import React from 'react';
import { useTranslation } from 'react-i18next';
import Skills from './Skills';

function About() {
  const { t } = useTranslation();

  return (
    <div
      className=" w-full flex
    items-start"
    >
      <div
        className="flex flex-col
       items-center justify-center mx-10 w-full"
      >

        <section
          className="flex flex-col justify-center items-center "
        >
          <div className=" my-4">
            <p className="text-xl italic font-semibold  w-full">{t('aboutTextInto')}</p>
            <p className=" w-full font-mono text-lg">{t('aboutText')}</p>
          </div>
          <div className=" my-4">
            <p className="text-xl italic font-semibold  w-full">{t('aboutCareerInto')}</p>
            <p className=" w-full font-mono text-lg">{t('aboutTextCarrer')}</p>
          </div>
          <div className=" my-4">
            <p className="text-xl italic font-semibold  w-full">
              {t('aboutExperienceInto')}
            </p>
            <p className=" w-full font-mono text-lg">{t('aboutTextExperience')}</p>
          </div>
          <div className=" my-4">
            <p className="text-xl italic font-semibold  w-full">
              {t('aboutObjectivesInto')}
            </p>
            <p className=" w-full font-mono text-lg">{t('aboutTextObjectives')}</p>
          </div>
          <div className="my-4">
            <p className="text-xl italic font-semibold  w-full">
              {t('aboutcuriosityInto')}
            </p>
            <p className=" w-full font-mono text-lg">{t('aboutTextCuriosity')}</p>
          </div>
          <div
            className="flex w-full justify-center items-center mt-6
       mb-16 max-md:flex-col"
          >
            <p className="font-mono text-lg italic ">{t('conect')}</p>
            <button
              className=" w-[50%] hadow-4xl  bg-indigo-700
             text-slate-200 p-1 rounded-lg h-12"
            >
              {t('button')}

            </button>
          </div>
        </section>
      </div>
      <section className="w-2/3">
        <h1>
          {t('skills')}
        </h1>
        <section>
          <Skills />
        </section>
      </section>

    </div>
  );
}
export default About;
