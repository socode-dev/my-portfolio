import clsx from "clsx";
import { motion } from "framer-motion";

const Button = ({
  children,
  type = "button",
  className = "",
  variant = "primary",
  onClick,
  ...props
}) => {
  const baseClasses =
    "px-2 py-1.5 rounded-md shadow-md font-poppins font-medium text-center flex justify-center transition cursor-pointer flex items-center";

  const variants = {
    primary: "text-xs bg-purple-600 hover:bg-purple-500 text-white ",
    outline:
      "bg-white border border-gray-800 hover:bg-gray-800 hover:text-white text-xs",
  };

  const finalClass = clsx(baseClasses, variants[variant], className);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 0.98, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 1.02 }}
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
