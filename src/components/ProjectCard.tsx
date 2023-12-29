/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function ProjectCard({ projectId, title, img, linkSite, github, techs }:
{ projectId: number, title: string, img: string,
  linkSite: string, github: string, techs: string }) {
  const { t } = useTranslation();

  const description = t(`projects.project${projectId}.description`);

  return (
    <div
      className="w-11/12 bg-slate-300
       dark:bg-slate-600 rounded-2xl mt-6 p-5 flex flex-col"
    >
      <h1
        className="text-2xl font-semibold mb-4 mx-5"
      >
        {title}
      </h1>
      <div className="flex justify-around max-lg:flex-col">
        <img
          src={ img }
          alt={ title }
          className="w-[60vh]
        rounded-2xl m-4 h-[40vh] max-[1300px]:w-[50vh] max-[1300px]:h-[40vh]
        max-lg:w-[60vh] max-lg:h-[40vh] max-lg:m-auto"
        />

        <div className="w-full flex flex-col m-4 max-lg:m-1">
          <p className="font-mono text-xl max-[1300px]:text-lg m-auto">{description}</p>
          <div className="flex">
            <Link to={ github } target="_blank" rel="noreferrer">
              <button
                className="flex flex-col items-center w-20 m-2"
              >
                <FontAwesomeIcon
                  icon={ faGithub }
                  className="dark:text-slate-100 text-slate-900 h-14 w-14 max-sm:w-9 "
                />
                Github
              </button>
            </Link>
            <Link to={ linkSite } target="_blank" rel="noreferrer">
              <button className="flex flex-col items-center w-20 h-22 m-2">
                <FontAwesomeIcon
                  icon={ faGlobe }
                  className="dark:text-slate-100 text-slate-900 h-14 w-14 max-sm:w-9 "
                />
                Site
              </button>
            </Link>
          </div>
          <p>{techs}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
