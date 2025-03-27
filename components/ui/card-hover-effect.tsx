/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "motion/react";

import Link from "next/link";
import { useState } from "react";
import { Drop } from "./Drop";

export const HoverEffect = ({
  items,
  className,
}: {
  items: any;
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10 w-full",
        className
      )}
    >
      {items?.map((item: any, idx: any) => (
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
                className="absolute inset-0 h-full w-full bg-brand dark:bg-slate-800/[0.8] block  rounded-3xl"
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
            <Drop key={item.title + idx} {...item} index={idx} />
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
        "rounded-2xl h-full w-full overflow-hidden  bg-white border border-neutral-300/50  dark:border-white/[0.2]  relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
