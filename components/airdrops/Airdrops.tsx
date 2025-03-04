/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardGrids from "../ui/CardGrids";
import Link from "next/link";
import { IconTrendingUp2 } from "@tabler/icons-react";

const Airdrops = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-10">
      {drops.map((drop) => (
        <Link
          href={"/"}
          key={drop.title}
          className="relative group border rounded-2xl border-neutral-200/60 p-6"
        >
          <CardGrids />

          <div className="flex flex-col gap-3 relative !z-[1000] ">
            <img src={drop.logo} alt="" className="size-12 rounded-xl" />

            <p className="font-semibold text-[16px]">{drop.title}</p>
            <p className="text-[15px]">{drop.description}</p>

            <div className="flex justify-end opacity-50 group-hover:opacity-100 group-hover:translate-x-1 duration-200">
              <IconTrendingUp2 />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Airdrops;

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
