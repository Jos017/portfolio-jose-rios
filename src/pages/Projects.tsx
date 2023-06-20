import { isOdd } from '../utils/mathUtils';
import { PROJECTS } from '../common/const';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className="mx-auto flex w-full flex-col gap-8 py-32">
      <h2>My Projects</h2>
      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            imgPos={isOdd(index) ? 'right' : 'left'}
            project={project}
            key={`${index}-${project.title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
