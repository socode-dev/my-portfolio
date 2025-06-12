import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projectData } from "../data/projectData";
import SectionWrapper from "../components/layouts/SectionWrapper";
import Heading from "../components/project_detail/Heading";
import Stacks from "../components/project_detail/Stacks";
import Detail from "../components/project_detail/Detail";
import MoreProject from "../components/project_detail/MoreProject";

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = projectData.find((project) => project.slug === slug);

  const moreProject = projectData.filter((project) => project.slug !== slug);
  console.log(moreProject);

  const {
    image,
    title,
    note,
    about,
    features,
    advantages,
    useCase,
    stacks,
    live,
    github,
  } = project;

  return (
    <motion.main
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <SectionWrapper className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <Heading title={title} note={note} live={live} github={github} />
      </SectionWrapper>

      <SectionWrapper>
        <div className="w-full h-[250px] md:h-[300px] rounded-xl blob-bg bg-no-repeat bg-cover bg-center py-6 px-10">
          <img
            src={image}
            alt={`${title}'s image`}
            className="w-full h-full rounded-xl shadow-lg"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="relative flex flex-col md:flex-row gap-8">
        <Stacks stacks={stacks} />
        <Detail
          about={about}
          features={features}
          advantages={advantages}
          useCase={useCase}
        />
      </SectionWrapper>

      <SectionWrapper className="space-y-6">
        <h3 className="text-4xl text-[rgb(var(--color-text))] font-extrabold">
          More Projects
          <span className="text-5xl text-[rgb(var(--color-brand))]">.</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {moreProject.map((project) => (
            <MoreProject key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </motion.main>
  );
};

export default ProjectDetail;
