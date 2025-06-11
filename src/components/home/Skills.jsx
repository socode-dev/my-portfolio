import { skillData } from "../../data/skillsData";

const Skills = () => {
  return (
    <>
      <h2 className="text-3xl font-bold">
        Skills
        <span className="text-5xl text-[rgb(var(--color-brand))]">.</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-6 max-w-[550px] md:justify-between">
        {skillData.map((data) => {
          const { id, heading, skills } = data;

          return (
            <div key={id} className="space-y-2">
              <h3 className="text-[rgb(var(--color-text))] text-xl font-bold">
                {heading}
              </h3>

              <ul className="list-none">
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-base text-[rgb(var(--color-muted))] font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
