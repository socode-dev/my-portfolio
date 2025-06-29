import { motion, useInView } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import Button from "../ui/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AnimatedProject = ({ project }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { slug, title, description, image } = project;

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-3"
    >
      <div className="w-full h-[300px] md:h-[350px] rounded-xl blob-bg bg-no-repeat bg-cover bg-center py-6 px-10">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt={`${title} image`}
          className="w-full h-full rounded-lg shadow-xl shadow-[rgb(var(--color-brand-light))]"
        />
      </div>

      <figcaption className="space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base text-[rgb(var(--color-muted))] font-medium">
          {description}
        </p>
        <Button
          onClick={() => navigate(`/projects/${slug}`)}
          type="button"
          variant="outline"
          className="space-x-2 group"
        >
          <span className="">View Details</span>
          <HiArrowUpRight className="text-[12px] text-[rgb(var(--color-brand))] group-hover:text-white transition" />
        </Button>
      </figcaption>
    </motion.figure>
  );
};

export default AnimatedProject;
