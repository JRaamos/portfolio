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
      className="flex justify-center flex-col dark:border-white w-4/5 h-2/5
     border-black border-2"
    >
      <h1>{title}</h1>
      <div className="flex justify-around">
        <img
          src={ img }
          alt={ title }
          className="w-5/12
          shadow-red-200 shadow-md rounded-2xl"
        />

        <div className="w-1/2 flex flex-col">
          <p className="border-2 border-black ">{description}</p>
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
