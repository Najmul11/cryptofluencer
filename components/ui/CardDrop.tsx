import { cn } from '@/utils/cn';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export  const CardDrop = ({
    title,
    description,
    logo,
    index,
    slug,
  }: {
    title: string;
    description: string;
    logo: React.ReactNode;
    index: number;
    slug: string;
  }) => {
    return (
      <Link
        href={`/${slug}`}
        className={cn(
          "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {/*########## hover gradient effect ########## */}
        <div className="opacity-0  transition duration-200 absolute inset-0 h-full w-full  to-transparent pointer-events-none" />
  
        {/*########### logo####### */}
        <div className="mb-4 relative z-10 px-10  ">
          <Image
            src={logo as string}
            alt=""
            width={45}
            height={45}
            className="rounded-full"
          />
        </div>
  
        {/* ### title */}
        <div className="text-lg font-bold mb-2 relative z-10 px-10 ">
          {/* yellow stick bar effect */}
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-brand/5 transition-all duration-200 origin-center" />
  
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block  ">
            {title}
          </span>
        </div>
  
        {/* description */}
        <p className="text-sm  max-w-xs relative z-10 px-10 mb-5">
          {" "}
          {description}
        </p>
  
        <button className=" absolute bottom-5 right-10 group-hover/feature:translate-x-2 duration-200 text-neutral-200 group-hover/feature:text-[#374151]">
          <IconArrowRight stroke={2} />
        </button>
      </Link>
    );
  };