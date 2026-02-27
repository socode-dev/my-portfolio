import Button from "../ui/Button";

const Heading = ({ title, description, live, github }) => {
  return (
    <>
      <div className="space-y-4 w-full md:w-3/6">
        <h2 className="text-4xl text-[rgb(var(--colot-text))] font-extrabold">
          {title}
          <span className="text-5xl text-[rgb(var(--color-brand))]">.</span>
        </h2>
        <p className="text-base text-[rgb(var(--color-muted))] font-medium">
          {description}
        </p>
      </div>

      <div className="grow flex md:justify-end space-x-3 w-full md:w-3/6">
        <a href={live} target="_blank" rel="noopener noreferrer">
          <Button type="button" children="Live Demo" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Button type="button" children="Github" variant="outline" />
        </a>
      </div>
    </>
  );
};

export default Heading;
