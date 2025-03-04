/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardGrids from "../ui/CardGrids";
import Link from "next/link";

const Airdrops = () => {
  return (
    <div className="grid grid-cols-4 gap-8 mt-10">
      {drops.map((drop) => (
        <Link
          href={"/"}
          key={drop.title}
          className="relative group border rounded-2xl border-neutral-200/60 p-4"
        >
          <CardGrids />

          <div className="flex flex-col gap-2">
            <img src={drop.logo} alt="" className="size-12 rounded-xl" />

            <p className="font-semibold text-[16px]">{drop.title}</p>
            <p className="text-[15px]">{drop.description}</p>
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
