/* eslint-disable @next/next/no-img-element */
"use client";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import FloatingIcon from "./FloatingIcon";

const Hero = () => {
  return (
    <div className="w-full flex-center h-full  z-10  relative">
      <div className="text-center space-y-8">
        <h1 className="text-7xl font-semibold">Compho Airdrops</h1>
        <p className="max-w-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          accusantium quaerat! Dolores quam perspiciatis temporibus, iste a odio
          ab voluptatem.
        </p>
        <div className="flex gap-6 justify-center">
          <button className="flex-center gap-1 group duration-200  bg-red-500 hover:bg-red-600 text-white  px-6  py-2 text-sm font-medium rounded-2xl select-none">
            Youtube
          </button>

          <button className="flex-center gap-1 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 text-sm font-medium rounded-2xl select-none">
            View All Airdrops{" "}
            <IconArrowRight
              stroke={2}
              size={20}
              className="group-hover:translate-x-1 duration-200 group-hover:text-brand"
            />
          </button>
        </div>
      </div>

      <FloatingIcon label="Binance" position="top-3/4 left-32" />
      <FloatingIcon label="Binance" position="top-24 right-32" />
      <FloatingIcon label="Binance" position="top-56 left-32" />
      <FloatingIcon label="Binance" position="bottom-56 right-32" />
    </div>
  );
};

export default Hero;
