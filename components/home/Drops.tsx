"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HoverEffect } from "../ui/card-hover-effect";
import SeeMore from "../ui/seeMore";
import { useGetAllProjectsQuery } from "@/redux/api/project";

const Drops = () => {
  const { data, isLoading } = useGetAllProjectsQuery("");

  console.log(data);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={animationVariants}
      className="py-16 "
    >
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold px-8 xl:px-0 flex items-center gap-3">
        Recent Airdrops
        <Image
          src="/assets/drop.png"
          alt="recent-airdrop-logo"
          width={64}
          height={64}
          className="w-16 -mt-5"
        />
      </h2>

      {/* drops */}
      <div>
        <HoverEffect items={data?.data} />
      </div>

      {/* View All Airdrops Button */}
      <div className="flex justify-end mt-3 px-8 xl:px-0">
        <SeeMore name={" View All AIrdrops "} link={"/airdrops/all"} />
      </div>
    </motion.div>
  );
};

export default Drops;

const animationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const drops = [
  {
    id: 1,
    title: "Phyt.fun",
    description: "Participate in the testnet and claim your NFT",
    logo: "/assets/phyt.jpg",
    slug: "phyt.fun1-",
    category: "NFT",
  },
  {
    id: 2,
    title: "Retro Bridge",
    description: "Join the testnet and receive a free NFT",
    logo: "/assets/retro.png",
    slug: "retro-bridge",
    category: "DeFi",
  },
  {
    id: 3,
    title: "Uplink",
    description: "Test the network and get your NFT",
    logo: "/assets/uplink.jpg",
    slug: "uplink",
    category: "Infrastructure",
  },
  {
    id: 4,
    title: "Phyt.fun",
    description: "Participate in the testnet and claim your NFT",
    logo: "/assets/phyt.jpg",
    slug: "phyt.fun-",
    category: "Gaming",
  },
  {
    id: 5,
    title: "Retro Bridge",
    description: "Join the testnet and receive a free NFT",
    logo: "/assets/retro.png",
    slug: "retro-bridge3",
    category: "Social",
  },
  {
    id: 6,
    title: "Uplink",
    description: "Test the network and get your NFT",
    logo: "/assets/uplink.jpg",
    slug: "uplink4",
    category: "Identity",
  },
  {
    id: 7,
    title: "Retro Bridge",
    description: "Join the testnet and receive a free NFT",
    logo: "/assets/retro.png",
    slug: "retro-bridge1",
    category: "Metaverse",
  },
  {
    id: 8,
    title: "Uplink",
    description: "Test the network and get your NFT",
    logo: "/assets/uplink.jpg",
    slug: "uplink2",
    category: "Data",
  },
];
