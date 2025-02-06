/* eslint-disable @next/next/no-img-element */
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

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

      <div>
        <Link
          href={"/"}
          className="absolute blur-[5px]  rotate-12  hover:blur-none duration-200   top-44 left-32 hover:scale-100 hover:rotate-45 hover:border border-brand/20 border-dotted rounded-full p-1.5 "
        >
          <div className="rounded-full p-1.5 border border-brand/25">
            <img src="/logo.png" alt="" className=" rounded-full size-14  " />
          </div>
        </Link>
        <span>Hello</span>
      </div>
    </div>
  );
};

export default Hero;
