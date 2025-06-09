import { NavLink } from "react-router-dom";

const FooterNav = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[rgb(var(--color-brand))]"
            : "text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-brand-light))]"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-[rgb(var(--color-brand))]"
            : "text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-brand-light))]"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive
            ? "text-[rgb(var(--color-brand))]"
            : "text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-brand-light))]"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-[rgb(var(--color-brand))]"
            : "text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-brand-light))]"
        }
      >
        Contact
      </NavLink>
    </>
  );
};

export default FooterNav;
