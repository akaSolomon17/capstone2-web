import { documentIcon } from "@/assets";
import { twMerge } from "tailwind-merge";

const View = ({
  data,
  active = false,
}: {
  data: { id: number; name: string; path: string };
  active?: boolean;
}) => {
  return (
    <button
      className={twMerge(
        "rounded-md w-full p-3 flex gap-2 items-center border border-white hover:bg-[#A62823]",
        active ? "bg-[#A62823]" : ""
      )}
    >
      <img src={documentIcon} alt="" />
      <p className="truncate">{data.name}</p>
    </button>
  );
};

export default View;
