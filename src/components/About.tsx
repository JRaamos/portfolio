import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className=" bg-slate-300 h-full w-full flex flex-col
    items-center dark:bg-slate-700"
    >

      <section className="flex justify-center w-full max-md:w-[calc(80%)]">
        <h1 className="text-2xl font-mono m-5">{t('about')}</h1>
      </section>
      <section
        className="flex flex-col justify-center items-center w-2/3"
      >
        <div className=" my-4">
          <p className="text-lg italic font-semibold  w-full">{t('aboutTextInto')}</p>
          <p className=" w-full font-mono">{t('aboutText')}</p>
        </div>
        <div className=" my-4">
          <p className="text-lg italic font-semibold  w-full">{t('aboutCareerInto')}</p>
          <p className=" w-full font-mono">{t('aboutTextCarrer')}</p>
        </div>
        <div className=" my-4">
          <p className="text-lg italic font-semibold  w-full">
            {t('aboutExperienceInto')}
          </p>
          <p className=" w-full font-mono">{t('aboutTextExperience')}</p>
        </div>
        <div className=" my-4">
          <p className="text-lg italic font-semibold  w-full">
            {t('aboutObjectivesInto')}
          </p>
          <p className=" w-full font-mono">{t('aboutTextObjectives')}</p>
        </div>
        <div className="my-4">
          <p className="text-lg italic font-semibold  w-full">
            {t('aboutcuriosityInto')}
          </p>
          <p className=" w-full font-mono">{t('aboutTextCuriosity')}</p>
        </div>
        <div
          className="flex w-full justify-center items-center mt-6
       mb-16 max-md:flex-col"
        >
          <p className="font-mono text-lg italic ">{t('conect')}</p>
          <button
            className=" w-[50%] hadow-4xl bg-amber-400
             dark:text-slate-900 p-1 rounded-lg h-12"
          >
            {t('button')}

          </button>
        </div>
      </section>

    </div>
  );
}
export default About;
