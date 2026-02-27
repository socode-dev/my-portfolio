import portrait from "../../assets/portrait.jpeg";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

const ContactHero = () => {
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-5xl md:text-6xl text-[rgb(var(--color-text))] font-extrabold">
          {" "}
          Get in Touch
          <span className="text-[rgb(var(--color-brand))]">.</span>
        </h2>
        <p className="text-[rgb(var(--color-muted))] text-base font-medium">
          Have a project in mind or want to work together? Reach out and I'll get back to you within 48 hours.        </p>

        <div className="space-y-2 w-fit">
          <a
            href="mailto:ososamuel246@gmail.com"
            rel="noopener noreferrer"
            className="text-base text-[rgb(var(--color-muted))] flex items-center space-x-3 cursor-pointer hover:text-[rgb(var(--color-text))] transition group"
          >
            <span className="p-2 border-2 border-[rgb(var(--color-muted))] group-hover:border-[rgb(var(--color-text))] transition rounded-full">
              <HiOutlineEnvelope />
            </span>
            <span>ososamuel246@gmail.com</span>
          </a>

          <a
            href="tel:+2348102794098"
            className="text-base text-[rgb(var(--color-muted))] flex items-center space-x-3 cursor-pointer hover:text-[rgb(var(--color-text))] transition group"
          >
            <span className="p-2 border-2 border-[rgb(var(--color-muted))] group-hover:border-[rgb(var(--color-text))] transition rounded-full">
              <HiOutlinePhone />
            </span>
            <span>+234 810 279 4098</span>
          </a>
        </div>
      </div>

      <div>
        <div className="w-72 h-72 border border-[rgb(var(--color-muted))] rounded-full flex justify-center items-center">
          <div className="w-5/6 h-5/6 rounded-full p-2 flex justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100">
            <img
              src={portrait}
              alt="Samuel Oso's Picture"
              loading="lazy"
              className="w-full h-full rounded-full backdrop-grayscale-75 brightness-85"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
