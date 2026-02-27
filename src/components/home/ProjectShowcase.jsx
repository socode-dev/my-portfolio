import { HiArrowUpRight } from "react-icons/hi2";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectShowcase = ({ project }) => {
  const navigate = useNavigate();
  const { slug, title, description, image } = project;

  const onNavigate = useCallback(() => {
    navigate(`/projects/${slug}`);
  }, []);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-4"
    >
      <div className="w-full h-[300px] rounded-xl blob-bg bg-no-repeat bg-cover bg-center py-6 px-10">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt={title}
          className="w-full h-full rounded-lg shadow-xl shadow-[rgb(var(--color-brand-light))]"
        />
      </div>

      <figcaption className="space-y-4">
        <div className="flex items-center space-x-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <button
            onClick={onNavigate}
            type="button"
            className="p-1 border-2 border-[rgb(var(--color-brand))] rounded-full group hover:bg-[rgb(var(--color-brand))] transition cursor-pointer"
          >
            <HiArrowUpRight className="text-[14px] text-[rgb(var(--color-brand))] group-hover:text-white transition" />
          </button>
        </div>
        <p className="text-base text-[rgb(var(--color-muted))] font-medium">
          {description}
        </p>
      </figcaption>
    </motion.figure>
  );
};

export default ProjectShowcase;
