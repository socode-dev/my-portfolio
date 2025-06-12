const Detail = ({ about, features, advantages, useCase }) => {
  return (
    <div className="space-y-4 w-full md:w-7/12">
      <h3 className="text-4xl text-[rgb(var(--color-text))] font-extrabold">
        About<span className="text-5xl text-[rgb(var(--color-brand))]">.</span>
      </h3>
      <p className="text-base text-[rgb(var(--color-muted))] font-medium">
        {about}
      </p>
      <div className="space-y-2">
        <h4 className="text-xl text-[rgb(var(--color-text))] font-bold">
          Features.
        </h4>
        <ul className="space-y-1 list-decimal px-4">
          {features.map((feature, i) => (
            <li
              key={i}
              className="text-base text-[rgb(var(--color-muted))] font-medium"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h4 className="text-xl text-[rgb(var(--color-text))] font-bold">
          Advantages
        </h4>
        <ul className="space-y-1 list-disc px-4">
          {advantages.map((ad, i) => (
            <li
              key={i}
              className="text-base text-[rgb(var(--color-muted))] font-medium"
            >
              {ad}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h4 className="text-xl text-[rgb(var(--color-text))] font-bold">
          Use Case
        </h4>
        <p className="text-base text-[rgb(var(--color-muted))] font-medium">
          {useCase}
        </p>
      </div>
    </div>
  );
};

export default Detail;
