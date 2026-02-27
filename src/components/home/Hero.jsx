import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import portrait from "../../assets/portrait.jpeg";

const Hero = () => {
  const navigate = useNavigate();

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/1ZVY1KQ-WfdHyixm45yMu3EOUuMokiosA/view?usp=sharing";
    link.download = 'Samuel_Oso_Resume.pdf';
    link.click();
  }

  return (
    <>
      <div className="space-y-3 grow md:max-w-5xl">
        <h1 className="text-lg font-medium text-[rgb(var(--color-muted))]">
          Hey, I'm Samuel Oso 👋🏻
        </h1>

        <h2 className="text-5xl md:text-6xl text-[rgb(var(--color-text))] font-extrabold">
          <span className="text-[rgb(var(--color-brand))]">Front</span>end
          Engineer
        </h2>
        <p className="text-[rgb(var(--color-muted))] text-base font-medium">
          Frontend Engineer focused on building product-grade web applications. I work with React and Firebase to create complete user-facing products with real flows, clean state management, and attention to how things actually feel to use.
        </p>

        <div className="flex space-x-4 w-fit">
          <Button
            onClick={handleResumeDownload}
            children="View Resume"
          />
          <Button
            onClick={() => navigate("/projects")}
            children="Browse Projects"
            variant="outline"
          />
        </div>
      </div>

      <div>
        <div className="w-80 h-80 border border-[rgb(var(--color-muted))] rounded-full flex justify-center items-center">
          <div className="w-5/6 h-5/6 rounded-full p-2 flex justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100">
            <img
              src={portrait}
              alt="Samuel Oso's Picture"
              loading="lazy"
              className="w-full h-full rounded-full object-fill backdrop-grayscale-75 brightness-85"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
