/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/cn";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export const Drop = ({
  name,
  highlightedText,
  logoURL,
  slug,
}: {
  name: string;
  description: string;
  logoURL: string;
  slug: string;
  highlightedText: string;
}) => {
  return (
    <Link
      href={`/${slug}`}
      className={cn("flex flex-col  py-6 relative group/feature")}
    >
      {/*########## hover gradient effect ########## */}
      <div className="opacity-0  transition duration-200 absolute inset-0 h-full w-full  to-transparent pointer-events-none" />

      {/*########### logo####### */}
      <div className="mb-4 relative z-10 px-6  ">
        <img src={logoURL as string} className="rounded-full size-14" />
      </div>

      {/* ### title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-6 ">
        {/* yellow stick bar effect */}
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-brand/5 transition-all duration-200 origin-center" />
        <span className="  inline-block  ">{name}</span>
      </div>

      {/* description */}
      <p className="text-sm  max-w-xs relative z-10 px-6 mb-5 line-clamp-2">
        {highlightedText}
      </p>

      <button className=" absolute !bottom-5 right-10 group-hover/feature:translate-x-2 duration-200 text-neutral-200 group-hover/feature:text-[#374151]">
        <IconArrowRight size={17} stroke={2} />
      </button>
    </Link>
  );
};
