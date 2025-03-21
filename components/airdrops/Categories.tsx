"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Categories = () => {
  const param = usePathname();
  // console.log(param);

  return (
    <div className="flex  gap-2 flex-wrap">
      {categories.map((category, index) => (
        <Link
          href={`${category.path}`}
          className={cn(
            "flex-center gap-1 group duration-200 bg-brand/5 hover:bg-brand/15  px-6 py-2  text-sm text-black font-medium rounded-xl select-none flex-shrink-0",
            {
              "bg-brand hover:bg-brand text-white": param === category.path,
            }
          )}
          key={index}
        >
          {category.title}
        </Link>
      ))}
      <Link
        href={"sponsored"}
        className={cn(
          "flex-center gap-1 group duration-200 bg-brand/5 hover:bg-brand/15  px-6 py-2  text-sm text-black font-medium rounded-xl select-none flex-shrink-0",
          {
            "bg-brand": param === "helo",
          }
        )}
      >
        🔥Sponsored
      </Link>
    </div>
  );
};

export default Categories;

// ... existing code ...

const categories = [
  {
    title: "All",
    id: "0",
    path: "/airdrops/all",
  },
  {
    title: "Depin",
    id: "1",
    path: "/airdrops/depin",
  },
  {
    title: "NFT",
    id: "2",
    path: "/airdrops/nft",
  },
  {
    title: "DeFi",
    id: "3",
    path: "/airdrops/defi",
  },
  {
    title: "DAO",
    id: "4",
    path: "/airdrops/dao",
  },
  {
    title: "Metaverse",
    id: "5",
    path: "/airdrops/metaverse",
  },
  {
    title: "Gaming",
    id: "6",
    path: "/airdrops/gaming",
  },
  {
    title: "Identity",
    id: "7",
    path: "/airdrops/identity",
  },
  {
    title: "Infrastructure",
    id: "8",
    path: "/airdrops/infrastructure",
  },
  {
    title: "Social",
    id: "9",
    path: "/airdrops/social",
  },
  {
    title: "Data",
    id: "10",
    path: "/airdrops/data",
  },
  {
    title: "AI",
    id: "11",
    path: "/airdrops/ai",
  },
];
