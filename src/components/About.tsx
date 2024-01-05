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
          <h2 className="text-3xl font-semibold w-[90vh] font-serif">
            {t('aboutTextInto')}
          </h2>

          <div className=" my-4 w-[90vh]">
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
            className="flex w-[90vh] justify-center items-center mt-6
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
      <section className="w-1/2">
        <h2 className="mx-4 font-serif font-semibold text-3xl">
          Skills
        </h2>
        <section className="">
          <Skills />
        </section>
      </section>

    </div>
  );
}
export default About;
