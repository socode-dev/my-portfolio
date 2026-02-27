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
          I'm a Frontend Engineer who builds product-grade web applications. I care about how things work, how they feel, and the thinking behind every decision.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
