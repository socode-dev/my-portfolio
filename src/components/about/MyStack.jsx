import { HiOutlineStar } from "react-icons/hi";
import { stacks } from "../../data/stackdata";

const MyStack = () => {
  const { firstRow, secondRow, thirdRow } = stacks;

  return (
    <>
      <h3 className="text-xl font-bold">My Stack.</h3>

      <div className="overflow-hidden w-full h-fit py-8 space-y-8 bg-neutral-400/90 rounded-xl">
        <div className="flex whitespace-nowrap animate-scroll-left gap-2 min-w-max">
          {firstRow.concat(firstRow).map((stack, i) => (
            <div key={i} className="flex items-center gap-2">
              <p className="bg-[rgb(var(--color-text))] text-white text-sm font-extralight px-3 py-1 rounded-lg">
                {stack}
              </p>
              <HiOutlineStar className="text-xl text-[rgb(var(--color-brand))]" />
            </div>
          ))}
        </div>

        <div className="flex whitespace-nowrap animate-scroll-right gap-2 min-w-max">
          {secondRow.concat(secondRow).map((stack, i) => (
            <div key={i} className="flex items-center gap-2">
              <p className="bg-[rgb(var(--color-text))] text-white text-sm font-extralight px-3 py-1 rounded-lg">
                {stack}
              </p>
              <HiOutlineStar className="text-xl text-[rgb(var(--color-brand))]" />
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default MyStack;
