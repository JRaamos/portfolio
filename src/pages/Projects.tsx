import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { projectsDetails } from '../utils/projectsDetails';

function Projects() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <h1>{t('projectPageTitle')}</h1>
      <div className="flex flex-col justify-center items-center">
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
