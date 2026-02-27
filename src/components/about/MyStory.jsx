const MyStory = () => {
  return (
    <>
      <h3 className="text-4xl text-[rgb(var(--color-text))] font-extrabold">
        My Story{" "}
        <span className="text-5xl text-[rgb(var(--color-brand))]">.</span>
      </h3>

      <p className="text-base text-[rgb(var(--color-muted))] font-medium mb-4">
        In early 2024 I bought a full-stack course out of pure curiosity. I just wanted to understand how websites and applications actually worked.
        {/* <span className="text-[rgb(var(--color-brand))]">HTML5</span>. The */}
      </p>
      <p className="text-base text-[rgb(var(--color-muted))] font-medium mb-3">
        What started as curiosity turned into something I couldn't stop doing.
      </p>
      <p className="text-base text-[rgb(var(--color-muted))] font-medium mb-3">
        The early days were humbling. Broken layouts, components that made no sense, bugs I couldn't explain. But I kept going because something about building things from nothing felt worth the frustration.
      </p>
      <p className="text-base text-[rgb(var(--color-muted))] font-medium mb-3">
        Two years in, I'm building apps with real authentication, state management, AI Integrations, and product flows that go beyond UI. I don't write custom backends, but I use Firebase to handle data, auth, and real-time flows the way a complete product needs. Projects like SmartBudget and SkillSync are things I genuinely couldn't have imagined building when I wrote my first line of code.
      </p>
      <p className="text-base text-[rgb(var(--color-muted))] font-medium">
        I'm proud of that distance. And I'm not done.
      </p>
    </>
  );
};

export default MyStory;
