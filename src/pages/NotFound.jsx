import { motion } from "framer-motion";
import SectionWrapper from "../components/layouts/SectionWrapper";
import { FaUnlink } from "react-icons/fa";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <SectionWrapper className="flex flex-col items-center space-y-6">
        <FaUnlink className="text-7xl text-[rgb(var(--color-muted))]" />
        <p className="text-4xl text-[rgb(var(--color-muted))] text-center">
          This page doesn't exist
        </p>
        <Link to="/">
          <Button children="Back Home" />
        </Link>
      </SectionWrapper>
    </motion.main>
  );
};

export default NotFound;
