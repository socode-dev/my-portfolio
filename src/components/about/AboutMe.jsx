const AboutMe = () => {
  return (
    <>
      <h2 className="text-4xl text-[rgb(var(--color-text))] font-extrabold">
        About me
        <span className="text-5xl text-[rgb(var(--color-brand))]">.</span>
      </h2>

      <div className="flex gap-4">
        <div className="w-4 bg-[rgb(var(--color-brand))] rounded"></div>
        <p className="text-base text-[rgb(var(--color-muted))] font-medium">
          Developing beautiful and functional websites is what i love doing. I
          am adept at combining my keen eye for design with my problem-solving
          abilities to craft visually appealing and functional websites which
          are essential skills in web development. I'm always up for new
          challenges and staying up-to-date with the latest web trends
        </p>
      </div>
    </>
  );
};

export default AboutMe;
