"use client";
import { cn } from "@/utils/cn";
import { IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    description: string;
    slug: string;
    category: string;
    logo: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  console.log(items);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={`/${item.slug}`}
          key={item?.slug}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-brand/15 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="">
            <CardImage src={item?.logo} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>

            <CardDescription>{item.description}</CardDescription>
            <div className='relative'>
            <CardButton className="absolute " ></CardButton>
            </div>
            
            
            

           
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden  bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">
          <div className="group-hover:translate-x-2 transition-transform duration-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn("font-semibold text-[16px] tracking-wide mt-4 ", className)}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-blackAccent tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-auto rounded-xl overflow-hidden",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        height={"300"}
        width={"300"}
        className="size-12 rounded-full"
      />
    </div>
  );
};



export const CardButton = ({
  className,
 
}: {
  className?: string;
  
}) => {
  
  return (
    <button
     
      className={cn(
        " bottom-0 right-0   ",
        className
      )}
    >
      <IconArrowRight stroke={2} />
    </button>
  );
};

  
