import { motion } from "framer-motion";
import SectionWrapper from "../components/layouts/SectionWrapper";
import { projectData } from "../data/projectData";
import AnimatedProject from "../components/project/AnimatedProject";

const Projects = () => {
  const projects = [...projectData].reverse();

  return (
    <motion.main
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <SectionWrapper className="space-y-5">
        <h2 className="text-5xl text-[rgb(var(--color-text))] font-extrabold">
          My <span className="text-[rgb(var(--color-brand))]">Best</span>{" "}
          Creations
        </h2>
        <p className="text-base text-[rgb(var(--color-muted))] font-medium">
          Each project you see here started with a blank file &mdash; and turned
          into something functional, responsive, and meaningful
        </p>
      </SectionWrapper>

      <SectionWrapper className="space-y-8">
        {projects.map((project, i) => (
          <AnimatedProject key={project.id} project={project} />
        ))}
      </SectionWrapper>
    </motion.main>
  );
};

export default Projects;
