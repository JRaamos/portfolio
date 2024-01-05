/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function ProjectCard({ projectId, title, img, linkSite, github }:
{ projectId: number, title: string, img: string,
  linkSite: string, github: string }) {
  const { t } = useTranslation();

  const description = t(`projects.project${projectId}.description`);

  return (
    <div
      className="w-full mt-6 p-5 flex"
    >
      <div
        className="flex max-lg:flex-col w-full justify-around
      max-lg:justify-center max-lg:items-center"
      >
        <img
          src={ img }
          alt={ title }
          className="w-[60vh] h-[40vh]
          rounded-2xl m-4  max-lg:w-[80%] max-lg:h-[60%]"
        />
        <div className="flex flex-col w-[60vh] m-10 max-lg:w-2/3 max-lg:items-center">
          <h1
            className="text-2xl font-semibold mb-5 max-lg:text-center"
          >
            {title}
          </h1>
          <p
            className="font-mono text-xl max-lg:text-center
           max-lg:w-full"
          >
            {description}

          </p>
          <Link to={ `/project/${projectId}` } className="w-36">
            <button
              className="bg-indigo-700 text-white p-1 rounded-md w-36 mt-5
              hover:scale-125 transition-all"
            >
              {t('buttonDetails')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
