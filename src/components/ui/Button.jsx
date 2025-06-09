import clsx from "clsx";
import { motion } from "framer-motion";
import { hoverTap } from "../../lib/motionVariants";

const Button = ({
  children,
  type = "button",
  className = "",
  variant = "primary",
  onClick,
  ...props
}) => {
  const baseClasses =
    "px-6 py-2 rounded-md shadow-md font-poppins font-medium text-center flex justify-center transition cursor-pointer flex items-center";

  const variants = {
    primary:
      "text-xs bg-[rgb(var(--color-brand))] hover:bg-[rgb(var(--color-brand-light))] text-white ",
    outline:
      "bg-white border border-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-text))] hover:text-white text-xs",
  };

  const finalClass = clsx(baseClasses, variants[variant], className);

  return (
    <motion.button
      {...hoverTap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      onClick={onClick}
      type={type}
      className={finalClass}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
