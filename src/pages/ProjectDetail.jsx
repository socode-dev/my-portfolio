import { motion } from "framer-motion";

const ProjectDetail = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      This is the Product Detail Page
    </motion.main>
  );
};

export default ProjectDetail;
