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
        <p className="text-lg italic font-semibold  w-full">{t('aboutTextInto')}</p>
        <p className=" w-full font-mono">{t('aboutText')}</p>
      </section>
    </div>
  );
}
export default About;
