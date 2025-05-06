import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const SeeMore = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className="flex justify-end mt-4">
      <Link
        href={link}
        className="flex-center gap-1 group duration-200  p-1 hover:text-brand hover:bg-brand/5 text-white bg-brand px-6  py-2  text-sm font-medium rounded-xl select-none"
      >
        {name}
        <IconArrowRight
          stroke={2}
          size={17}
          className="group-hover:translate-x-1 duration-200 "
        />
      </Link>
    </div>
  );
};

export default SeeMore;
