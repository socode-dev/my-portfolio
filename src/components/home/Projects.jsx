import { projectData } from "../../data/projectData";
import ProjectShowcase from "./ProjectShowcase";

const Projects = () => {
  const projects = [...projectData].reverse();

  return (
    <>
      <h2 className="text-3xl font-bold">
        Projects
        <span className="text-5xl text-[rgb(var(--color-brand))]">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectShowcase key={i} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
