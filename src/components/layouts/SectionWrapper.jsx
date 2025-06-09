import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideUp } from "../../lib/motionVariants";

const SectionWrapper = ({ className = "", children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.section
      ref={ref}
      variants={slideUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`py-12 px-4 sm:px-6 lg:px-16 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
