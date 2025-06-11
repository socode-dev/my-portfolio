import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Hamburger from "../ui/Hamburger";
import { useNavigate } from "react-router-dom";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { width } = useWindowSize();

  useEffect(() => {
    width > 768 && setIsMenuOpen(false);
  }, [width, isMenuOpen]);

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative top-0 left-0 right-0 z-30 bg-[rgb(var(--color-bg))] flex justify-between items-center p-3"
    >
      <button
        onClick={() => navigate("/")}
        type="button"
        className="cursor-pointer"
      >
        <img
          src="../../../favicon.ico"
          alt="Samuel Oso Code(SOCODE) logo"
          loading="lazy"
          className="w-12 h-7"
        />
      </button>

      {/* Large Screen Nav */}
      <nav>
        <ul className="list-none flex space-x-3 font-bold text-[rgb(var(--color-muted))] max-md:hidden">
          <Navbar />
        </ul>
      </nav>

      {/* Contact Icon */}
      <button
        onClick={() => navigate("/contact")}
        type="button"
        className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-[rgb(var(--color-muted))] transition cursor-pointer shadow-md shadow-[rgb(var(--color-muted))] rounded-full max-md:hidden"
      >
        <MessageOutlinedIcon sx={{ color: "white", fontSize: "22px" }} />
      </button>

      {/* Hamburger Icon & Mobile Nav */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        type="button"
        className="md:hidden cursor-pointer relative w-8 h-4 flex flex-col justify-between items-center group"
      >
        <Hamburger isMenuOpen={isMenuOpen} />
      </button>

      {isMenuOpen && (
        <motion.nav
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-12 left-0 right-0 z-50 bg-inherit py-4 px-10"
        >
          <ul className="list-none flex flex-col space-y-3 font-bold text-[rgb(var(--color-muted))] ">
            <Navbar closeMenu={() => setIsMenuOpen(false)} />
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
