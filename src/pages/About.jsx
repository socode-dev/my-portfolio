import { motion } from "framer-motion";
import SectionWrapper from "../components/layouts/SectionWrapper";
import AboutMe from "../components/about/AboutMe";
import MyStack from "../components/about/MyStack";
import MyStory from "../components/about/MyStory";

const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <SectionWrapper className="space-y-8">
        <AboutMe />
      </SectionWrapper>

      <SectionWrapper className="space-y-8">
        <MyStack />
      </SectionWrapper>

      <SectionWrapper className="space-y-8">
        <MyStory />
      </SectionWrapper>
    </motion.main>
  );
};

export default About;
