const Stacks = ({ stacks }) => {
  return (
    <div className="space-y-4 md:sticky md:top-0 md:left-0 md:h-screen">
      <h3 className="text-4xl text-[rgb(var(--color-text))] font-extrabold">
        Stacks<span className="text-5xl text-[rgb(var(--color-brand))]">.</span>
      </h3>
      <ul className=" border-2 border-[rgb(var(--color-brand))] rounded-lg  shadow-rounded p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-2">
        {stacks.map((stack, i) => (
          <li
            key={i}
            className="text-base text-[rgb(var(--color-muted))] font-medium"
          >
            {stack}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stacks;
