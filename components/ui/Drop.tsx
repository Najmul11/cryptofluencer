/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/cn";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type TDrop = {
  name: string;
  description: string;
  logoURL: string;
  slug: string;
  highlightedText: string;
  funding: number;
  fundingUnit: string;
  platform: any;
  categories: any;
};

export const Drop = ({
  name,
  highlightedText,
  logoURL,
  slug,
  funding,
  fundingUnit,
  platform,
  categories,
}: TDrop) => {
  return (
    <Link
      href={`/${slug}`}
      className={cn("flex flex-col  py-6 relative group/feature ")}
    >
      {/*########### logo####### */}
      <div className="mb-4 relative z-10 px-6  ">
        <img src={logoURL as string} className="rounded-full size-14" />
      </div>

      {/* ### title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-6 ">
        {/* yellow stick bar effect */}
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-200  group-hover/feature:bg-brand transition-all duration-200 origin-center" />
        <span className="  inline-block  ">{name}</span>
      </div>

      {/* description */}
      <p className="text-sm  max-w-xs relative z-10 px-6 mb-5 line-clamp-2">
        {highlightedText}
      </p>

      <button className=" absolute !bottom-5 right-5 group-hover/feature:translate-x-2 duration-200 text-neutral-200 group-hover/feature:text-[#374151]">
        <IconArrowRight size={17} stroke={2} />
      </button>

      {/* ############ tags ################ */}

      {
        <div className="absolute top-3 right-4">
          <div className="flex gap-1 items-center">
            {funding > 0 && (
              <p className="border bg-brand rounded-lg font-medium text-[13px] px-2 text-white">
                ${funding}
                <span className=" text-[13px]">{fundingUnit.slice(0, 1)}</span>
              </p>
            )}

            {platform && (
              <p className="border bg-brand rounded-lg font-medium text-[13px] px-2 text-white">
                {platform?.name}
              </p>
            )}
            {categories?.length > 0 && (
              <p className="border bg-brand rounded-lg font-medium text-[13px] px-2 text-white">
                {categories[0]?.category?.name}
              </p>
            )}
          </div>
        </div>
      }
    </Link>
  );
};
