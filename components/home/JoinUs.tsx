/* eslint-disable @next/next/no-img-element */
"use client";
import { IconHeartHandshake } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const JoinUs = () => {
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
    >
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold px-8 xl:px-0 flex items-center gap-5">
        Join Us <IconHeartHandshake size={80} className="text-brand" />
      </h2>

      <div className="mt-10">
        {/* links and affiliates */}
        <div className="grid grid-cols-6 gap-5">
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
      </div>
    </motion.div>
  );
};

export default JoinUs;
