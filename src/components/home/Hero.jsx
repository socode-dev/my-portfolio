import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import myPortrait from "../../assets/home/my-portrait.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="space-y-3 md:w-4/6">
        <h1 className="text-lg font-medium text-[rgb(var(--color-muted))]">
          Hey, I'm Samuel Oso 👋🏻
        </h1>

        <h2 className="text-5xl md:text-6xl text-[rgb(var(--color-text))] font-extrabold">
          <span className="text-[rgb(var(--color-brand))]">Front</span>end
          Developer
        </h2>
        <p className="text-[rgb(var(--color-muted))] text-base font-medium">
          I'm a front developer based in Nigeria. I'm passionate about creating
          thoughtful and innovative web experiences that make a lasting impact.
        </p>

        <div className="flex space-x-4 w-fit">
          <Button
            onClick={() => navigate("/contact")}
            children="Get in Touch"
          />
          <Button
            onClick={() => navigate("/projects")}
            children="Browse Projects"
            variant="outline"
          />
        </div>
      </div>

      <div className="md:w-2/6">
        <div className="w-72 h-72 border border-[rgb(var(--color-muted))] rounded-full flex justify-center items-center">
          <div className="w-5/6 h-5/6 rounded-full p-2 flex justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100">
            <img
              src={myPortrait}
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

export default Hero;
