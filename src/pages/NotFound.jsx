import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      This is NotFound Page
    </motion.main>
  );
};

export default NotFound;
