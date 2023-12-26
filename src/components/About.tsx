import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className=" bg-slate-300 w-full h-screen flex flex-col items-center">

      <section className="flex justify-center w-full">
        <h1 className="text-2xl font-mono m-5">{t('about')}</h1>
      </section>
      <section
        className="flex flex-col justify-center items-center w-2/3"
      >
        <div>
          <p className="text-lg italic font-semibold  w-full">{t('aboutTextInto')}</p>
          <p className=" w-full font-mono">{t('aboutText')}</p>
        </div>
        <div>
          <p className="text-lg italic font-semibold  w-full">{t('aboutCareerInto')}</p>
          <p className=" w-full font-mono">{t('aboutTextCarrer')}</p>
        </div>
        <div>
          <p className="text-lg italic font-semibold  w-full">
            {t('aboutExperienceInto')}
          </p>
          <p className=" w-full font-mono">{t('aboutTextExperience')}</p>
        </div>
        <div>
          <p className="text-lg italic font-semibold  w-full">
            {t('aboutObjectivesInto')}
          </p>
          <p className=" w-full font-mono">{t('aboutTextObjectives')}</p>
        </div>
        <div>
          <p className="text-lg italic font-semibold  w-full">
            {t('aboutcuriosityInto')}
          </p>
          <p className=" w-full font-mono">{t('aboutTextCuriosity')}</p>
        </div>
        <div className="flex w-full justify-center items-center">
          <p className="font-mono w-2/3">{t('conect')}</p>
          <button
            className="mx-2  hadow-4xl bg-amber-400
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
