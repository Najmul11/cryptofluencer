/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/utils/cn";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

import { motion } from "framer-motion";

import Link from "next/link";

export function Drops() {
  const drops = [
    {
      title: "Phyt.fun ",
      description: "Engage with free testnet, mint the free NFT ",
      logo: "/assets/phyt.jpg",
    },
    {
      title: "Retro Bridge",
      description: "Engage with free testnet, mint the free NFT ",
      logo: "/assets/retro.png",
    },
    {
      title: "Uplink",
      description: "Engage with free testnet, mint the free NFT ",
      logo: "/assets/uplink.jpg",
    },
    {
      title: "Phyt.fun ",
      description: "Engage with free testnet, mint the free NFT ",
      logo: "/assets/phyt.jpg",
    },
    {
      title: "Retro Bridge",
      description: "Engage with free testnet, mint the free NFT ",
      logo: "/assets/retro.png",
    },
    {
      title: "Uplink",
      description: "Engage with free testnet, mint the free NFT ",
      logo: "/assets/uplink.jpg",
    },
    {
      title: "Retro Bridge",
      description: "Engage with free testnet, mint the free NFT ",
      logo: "/assets/retro.png",
    },
    {
      title: "Uplink",
      description: "Engage with free testnet, mint the free NFT ",
      logo: "/assets/uplink.jpg",
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={animationVariants}
      className="py-20 "
    >
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold px-8 xl:px-0">
        Recent Airdrops
        <img
          src="/assets/drop.png"
          alt="recent-airdrop-logo"
          className="w-16 !inline-block ml-5 -mt-5 "
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto mt-10">
        {drops.map((drop, index) => (
          <Drop key={drop.title + index} {...drop} index={index} />
        ))}
      </div>

      {/* #### view all airdrops btn */}
      <div className="flex justify-end mt-3">
        <button className="flex-center gap-1 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 text-sm font-medium rounded-2xl select-none">
          View All Airdrops{" "}
          <IconArrowRight
            stroke={2}
            size={20}
            className="group-hover:translate-x-1 duration-200 group-hover:text-brand"
          />
        </button>
      </div>
    </motion.div>
  );
}

const Drop = ({
  title,
  description,
  logo,
  index,
}: {
  title: string;
  description: string;
  logo: React.ReactNode;
  index: number;
}) => {
  return (
    <Link
      href={"/e"}
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {/*########## hover gradient effect ########## */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-brand/20   to-transparent pointer-events-none" />

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
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-brand transition-all duration-200 origin-center" />

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
