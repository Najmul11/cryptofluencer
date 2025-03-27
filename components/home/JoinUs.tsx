/* eslint-disable @next/next/no-img-element */
"use client";
import {
  IconBrandTelegram,
  IconBrandX,
  IconBrandYoutube,
  IconHeartHandshake,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import Link from "next/link";
import SeeMore from "../ui/seeMore";

const JoinUs = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={animationVariants}
      >
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold px-8 xl:px-0 flex items-center gap-5">
          Join Us <IconHeartHandshake size={80} className="text-brand" />
        </h2>

        <div className="mt-10">
          <PrimaryPlatforms />
          {/* links and affiliates */}
          <div className="grid grid-cols-6 gap-5 mt-8">
            <Link
              href={"/"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/binance.png" alt="" className="w-6 rounded" />
              Binance
            </Link>
            <Link
              href={"/"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/okx.jpg" alt="" className="w-6 rounded" />
              OKX
            </Link>
            <Link
              href={"/"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/bitget.png" alt="" className="w-6 rounded" />
              Bitget
            </Link>
            <Link
              href={"/airdrops/all"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/bybit.png" alt="" className="w-6 rounded" />
              ByBit
            </Link>
            <Link
              href={"/airdrops/all"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/binance.png" alt="" className="w-6 rounded" />
              Binance
            </Link>
            <Link
              href={"/airdrops/all"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/okx.jpg" alt="" className="w-6 rounded" />
              OKX
            </Link>
            <Link
              href={"/airdrops/all"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/bitget.png" alt="" className="w-6 rounded" />
              Bitget
            </Link>
            <Link
              href={"/airdrops/all"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/bybit.png" alt="" className="w-6 rounded" />
              ByBit
            </Link>
            <Link
              href={"/airdrops/all"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/binance.png" alt="" className="w-6 rounded" />
              Binance
            </Link>
            <Link
              href={"/airdrops/all"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/okx.jpg" alt="" className="w-6 rounded" />
              OKX
            </Link>
            <Link
              href={"/airdrops/all"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/bitget.png" alt="" className="w-6 rounded" />
              Bitget
            </Link>
            <Link
              href={"/airdrops/all"}
              className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
            >
              <img src="/assets/bybit.png" alt="" className="w-6 rounded" />
              ByBit
            </Link>
          </div>

          <div className="mt-10">
            <SeeMore name={" See More "} link={"/home"} />
          </div>
        </div>
      </motion.div>
      <div></div>
    </div>
  );
};

export default JoinUs;

const PrimaryPlatforms = () => {
  return (
    <div className="mt-5 grid grid-cols-3 gap-5">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.path}
          style={{ borderColor: link.color }}
          className="py-3 border-2   hover:text-white group duration-200 rounded-lg flex-center gap-2 text-xl font-semibold relative overflow-hidden"
        >
          {link.icon}
          {link.label}
          {/* Background transition effect */}
          <span
            style={{ background: link.color }}
            className="absolute h-[300px] -translate-x-2 group-hover:translate-x-0 w-full  scale-x-[10%] rotate-6 group-hover:rotate-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 block"
          ></span>
        </Link>
      ))}
    </div>
  );
};

const links = [
  {
    label: "Youtube",
    path: "/airdrops/ai",
    icon: <IconBrandYoutube size={45} className="fill-red-500 text-white" />,
    color: "#ef4444",
  },
  {
    label: "Telegram",
    path: "/airdrops/depin",
    icon: <IconBrandTelegram size={45} className="fill-[#39AFD9] text-white" />,
    color: "#39AFD9",
  },
  {
    label: "Twitter",
    path: "/airdrops/depin",
    icon: <IconBrandX size={30} className="" />,
    color: "#000",
  },
];
