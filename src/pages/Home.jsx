import { motion } from "framer-motion";
import SectionWrapper from "../components/layouts/SectionWrapper";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[rgb(var(--color-bg))]"
    >
      {/* Hero Section */}
      <SectionWrapper className="flex flex-col md:flex-row md:justify-between items-center gap-10">
        <Hero />
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper className="space-y-8">
        <Projects />
      </SectionWrapper>

      <SectionWrapper className="space-y-8">
        <Skills />
      </SectionWrapper>
    </motion.main>
  );
};

export default Home;
