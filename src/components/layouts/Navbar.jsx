import { NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

const Navbar = ({ closeMenu }) => {
  const { width } = useWindowSize();

  return (
    <>
      <li className="text-base">
        <NavLink
          onClick={closeMenu}
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[rgb(var(--color-brand))]"
              : "hover:text-[rgb(var(--color-brand-light))] text-[rgb(var(--color-muted))] transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-base">
        <NavLink
          onClick={closeMenu}
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-[rgb(var(--color-brand))]"
              : "hover:text-[rgb(var(--color-brand-light))] text-[rgb(var(--color-muted))] transition"
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="text-base">
        <NavLink
          onClick={closeMenu}
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[rgb(var(--color-brand))]"
              : "hover:text-[rgb(var(--color-brand-light))] text-[rgb(var(--color-muted))] transition"
          }
        >
          About
        </NavLink>
      </li>
      {width < 768 && (
        <li className="text-base">
          <NavLink
            onClick={closeMenu}
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[rgb(var(--color-brand))]"
                : "hover:text-[rgb(var(--color-brand-light))] text-[rgb(var(--color-muted))] transition"
            }
          >
            Get in Touch
          </NavLink>
        </li>
      )}
    </>
  );
};

export default Navbar;
