import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
} from "react-icons/fa6";

const Socials = () => {
  return (
    <>
      <a
        href="http://www.instagram.com/_samuel_oso?igsh=b3E3Z2ttMmt2cTY1&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-brand))] text-xl cursor-pointer transition" />
      </a>

      <a
        href="http://www.linkedin.com/in/samuel-oso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-brand))] text-xl cursor-pointer transition" />
      </a>

      <a
        href="https://github.com/socode-dev?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-brand))] text-xl cursor-pointer transition" />
      </a>
      <a
        href="http://www.discord.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord className="text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-brand))] text-xl cursor-pointer transition" />
      </a>
    </>
  );
};

export default Socials;
