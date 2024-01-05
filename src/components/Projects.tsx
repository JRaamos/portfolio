import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import ProjectCard from './ProjectCard';
import { projectsDetails } from '../utils/projectsDetails';

function Projects() {
  const { t } = useTranslation();
  return (
    <div>
      <h1
        className="font-mono font-bold text-center text-3xl
      mt-10 mb-10"
      >
        {t('projectPageTitle')}

      </h1>
      <div className="flex justify-center items-center flex-col">
        {
        projectsDetails.map((project, index) => (
          <ProjectCard
            key={ project.title }
            projectId={ index }
            title={ project.title }
            img={ project.img }
            linkSite={ project.linkSite }
            github={ project.github }
            techs={ project.techs }
          />
        ))
        }
      </div>
    </div>
  );
}
export default Projects;
