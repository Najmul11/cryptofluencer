"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Categories = () => {
  const param = usePathname();

  return (
    <div className="flex  gap-2 flex-wrap">
      {categories.map((category, index) => (
        <Link
          href={`/airdrops${category.path}`}
          className={cn(
            "flex-center gap-1 group duration-200 bg-brand/5 hover:bg-brand/15  px-6 py-2  text-sm text-black font-medium rounded-xl select-none flex-shrink-0",
            {
              "bg-brand": param === category.path,
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
    path: "/all",
  },
  {
    title: "Depin",
    id: "1",
    path: "/depin",
  },
  {
    title: "NFT",
    id: "2",
    path: "/nft",
  },
  {
    title: "DeFi",
    id: "3",
    path: "/defi",
  },
  {
    title: "DAO",
    id: "4",
    path: "/dao",
  },
  {
    title: "Metaverse",
    id: "5",
    path: "/metaverse",
  },
  {
    title: "Gaming",
    id: "6",
    path: "/gaming",
  },
  {
    title: "Identity",
    id: "7",
    path: "/identity",
  },
  {
    title: "Infrastructure",
    id: "8",
    path: "/infrastructure",
  },
  {
    title: "Social",
    id: "9",
    path: "/social",
  },
  {
    title: "Data",
    id: "10",
    path: "/data",
  },
  {
    title: "AI",
    id: "11",
    path: "/ai",
  },
];
