import { NavLink } from "react-router-dom";

const FooterNav = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-purple-600" : "text-gray-600 hover:text-purple-800"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-purple-600" : "text-gray-600 hover:text-purple-800"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "text-purple-600" : "text-gray-600 hover:text-purple-800"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-purple-600" : "text-gray-600 hover:text-purple-800"
        }
      >
        Contact
      </NavLink>
    </>
  );
};

export default FooterNav;
