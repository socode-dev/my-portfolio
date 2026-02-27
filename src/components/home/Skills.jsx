import { skills } from "../../data/skillsData";

const Skills = () => {
  return (
    <>
      <h2 className="text-3xl font-bold">
        Skills
        <span className="text-5xl text-[rgb(var(--color-brand))]">.</span>
      </h2>

            <ul className="list-none flex flex-wrap gap-4 mx-auto">
                {skills.map((skill, i) => (
                  <li
                    key={`${skill}-${i}`}
                    className="text-lg text-[rgb(var(--color-muted))] font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            
    </>
  );
};

export default Skills;
