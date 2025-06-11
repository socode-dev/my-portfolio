import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import FooterNav from "./FooterNav";
import Socials from "../ui/Socials";
import Button from "../ui/Button";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const year = new Date().getFullYear();

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[rgb(var(--color-bg))] flex flex-col items-center text-center space-y-8 p-5"
    >
      <section className="w-full flex flex-col items-center gap-4 md:flex-row md:justify-between space-y-2.5">
        <ul className="flex space-x-4 font-bold text-base">
          <FooterNav />
        </ul>

        <div className="flex items-center space-x-4">
          <Socials />
        </div>
      </section>

      <section className="w-full flex flex-col items-center gap-4 md:flex-row md:justify-between space-y-2.5">
        <div className="space-y-4">
          <h5 className="font-bold text-lg text-[rgb(var(--color-muted))]">
            Interested in working together{" "}
            <span className="text-purple-600">?</span>
          </h5>

          <div className="flex space-x-4 mx-auto w-fit">
            <Button
              onClick={() => navigate("/contact")}
              children="Get in Touch"
            />
            <Button
              onClick={() => navigate("/projects")}
              children="Browse Projects"
              variant="outline"
            />
          </div>
        </div>

        <div className="text-[rgb(var(--color-muted))] text-xs font-medium">
          <p className="">&copy; {year} All Rights Reserved</p>
          <p className="flex items-center ">
            Made with <FaHeart className="text-purple-600 mx-2" /> by Samuel
            Oso(SOCODE)
          </p>
        </div>
      </section>
    </motion.footer>
  );
};

export default Footer;
