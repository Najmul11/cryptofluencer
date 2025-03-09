/* eslint-disable @next/next/no-img-element */
"use client";
import { drops } from "@/components/airdrops/Airdrops";
import CardGrids from "@/components/ui/CardGrids";
import { IconTrendingUp2 } from "@tabler/icons-react";
import Link from "next/link";
const HotDrops = () => {
  return (
    <div className="flex flex-col gap-5">
      {drops.slice(0, 4).map((drop) => (
        <Link
          href={{
            pathname: `/${drop.slug}`,
          }}
          key={drop.title}
          className="relative group border rounded-2xl border-neutral-200/60 p-6"
        >
          <CardGrids />

          <div className="flex flex-col gap-3 relative !z-[1000] ">
            <img src={drop.logo} alt="" className="size-12 rounded-xl" />

            <p className="font-semibold text-[16px]">{drop.title}</p>
            <p className="text-[15px] line-clamp-2">{drop.description}</p>
          </div>

          <div className="flex justify-end opacity-30 group-hover:opacity-100 group-hover:translate-x-1 duration-200">
            <IconTrendingUp2 />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HotDrops;
