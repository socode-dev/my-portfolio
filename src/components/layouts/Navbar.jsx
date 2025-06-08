import { NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

const Navbar = ({ closeMenu }) => {
  const { width } = useWindowSize();

  return (
    <>
      <li className="text-sm">
        <NavLink
          onClick={closeMenu}
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "hover:text-purple-800 transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-sm">
        <NavLink
          onClick={closeMenu}
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "hover:text-purple-800 transition"
          }
        >
          About
        </NavLink>
      </li>
      <li className="text-sm">
        <NavLink
          onClick={closeMenu}
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "hover:text-purple-800 transition"
          }
        >
          Projects
        </NavLink>
      </li>
      {width < 768 && (
        <li className="text-sm">
          <NavLink
            onClick={closeMenu}
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-purple-600" : "hover:text-purple-800 transition"
            }
          >
            Contact
          </NavLink>
        </li>
      )}
    </>
  );
};

export default Navbar;
