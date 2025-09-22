import { projectData } from "../../data/projectData";
import ProjectShowcase from "./ProjectShowcase";
import Button from "../ui/Button"
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const projects = [...projectData].reverse();

  return (
    <>
      <h2 className="text-3xl font-bold">
        Projects
        <span className="text-5xl text-[rgb(var(--color-brand))]">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects?.slice(0, 2).map((project, i) => (
          <ProjectShowcase key={i} project={project} />
        ))}
      </div>

      <Button onClick={() => navigate("/projects")} variant="primary" className="mx-auto">See More Projects</Button>
    </>
  );
};

export default Projects;
