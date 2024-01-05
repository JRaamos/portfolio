import ProjectCard from './ProjectCard';
import { projectsDetails } from '../utils/projectsDetails';

function Projects() {
  return (
    <div>

      <div className="flex justify-center items-center flex-col">
        {
        projectsDetails.map((project, index) => (
          <ProjectCard
            key={ project.title }
            projectId={ index }
            title={ project.title }
            img={ project.img }
          />
        ))
        }
      </div>
    </div>
  );
}
export default Projects;
