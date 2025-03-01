/* eslint-disable @next/next/no-img-element */
"use client";
import { IconArrowRight } from "@tabler/icons-react";
import React, { useState } from "react";
import FloatingIcon from "./FloatingIcon";
import { affilates } from "@/data/affiliates";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Limit movement to ±20px
    const x = Math.min(Math.max((clientX - left - width / 2) / 20, -20), 20);
    const y = Math.min(Math.max((clientY - top - height / 2) / 20, -20), 20);

    setMousePos({ x, y });
  };

  return (
    <div
      className="w-full flex-center h-full z-10 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="text-center space-y-8">
        <h1 className="text-7xl font-semibold">sadek Airdrops</h1>
        <p className="max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          accusantium quaerat! Dolores quam perspiciatis temporibus, iste a odio
          ab voluptatem.
        </p>
        <div className="flex gap-6 justify-center">
          <button className="flex-center gap-1 group duration-200 bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-sm font-medium rounded-2xl select-none">
            Youtube
          </button>
          <button className="flex-center gap-1 group duration-200 hover:text-brand px-6 py-2 bg-brand/5 text-sm font-medium rounded-2xl select-none">
            View All Airdrops{" "}
            <IconArrowRight
              stroke={2}
              size={20}
              className="group-hover:translate-x-1 duration-200 group-hover:text-brand"
            />
          </button>
        </div>
      </div>

      {affilates.map((affiliate, index) => (
        <FloatingIcon
          key={affiliate.org}
          index={index}
          label={affiliate.org}
          affiliateLink={affiliate.affiliateLink}
          image={affiliate.logo.src}
          mousePos={mousePos} // Pass mouse position
        />
      ))}
    </div>
  );
};

export default Hero;
