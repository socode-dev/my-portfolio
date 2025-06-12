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
    "px-6 py-2 rounded-md shadow-md font-chakra font-semibold text-center flex justify-center transition cursor-pointer flex items-center";

  const variants = {
    primary:
      "text-sm bg-[rgb(var(--color-brand))] hover:bg-[rgb(var(--color-brand-light))] text-white ",
    outline:
      "bg-white border-2 border-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-text))] text-[rgb(var(--color-text))] hover:text-white text-sm",
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
