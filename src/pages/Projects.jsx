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
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="py-8 space-y-6"
    >
      <SectionWrapper className="space-y-5">
        <h2 className="text-5xl text-[rgb(var(--color-text))] font-extrabold">
          Things I've Built
        </h2>
        <p className="text-base text-[rgb(var(--color-muted))] font-medium">
          From practice projects to product-grade apps, each one taught me something the previous one didn't
        </p>
      </SectionWrapper>

      <SectionWrapper className="grid grid-cols-1 md:grid-cols-2 gap-15">
        {projects.map((project) => (
          <AnimatedProject key={project.id} project={project} />
        ))}
      </SectionWrapper>
    </motion.main>
  );
};

export default Projects;
