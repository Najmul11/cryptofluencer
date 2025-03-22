"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CategoryMenu = () => {
  const param = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const primaryCategories = categories.slice(0, 3); // Display the first 3 categories as primary buttons
  const moreCategories = categories.slice(3); // Remaining categories for the dropdown

  return (
    <div className="flex justify-between   relative">
      <div className=" flex items-center gap-4">
      {primaryCategories.map((category) => (
        <Link
          key={category.id}
          href={category.path}
          className={cn(
            "flex-center gap-1 duration-200 bg-brand/5 hover:bg-brand/15 px-6 py-2 text-sm text-black font-medium rounded-xl select-none",
            {
              "bg-brand text-white": param === category.path,
            }
          )}
        >
          {category.title}
        </Link>
      ))}
      </div>
     

      {/* More Button */}
      <div
        className="relative"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <button className="flex-center gap-1 duration-200 bg-brand/5 hover:bg-brand/15 px-6 py-2 text-sm text-black font-medium rounded-xl select-none">
          More ...
        </button>

        {/* Animated Dropdown */}
        <AnimatePresence>
  {showDropdown && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full mt-0  right-0     mx-auto w-[1280px] grid grid-cols-6 bg-white   p-4 z-50 gap-2"
    >
      {moreCategories.map((category) => (
        <Link
          key={category.id}
          href={category.path}
          className={cn(
            "block px-4 py-2 text-sm text-black hover:bg-brand/10 rounded-lg transition-colors",
            {
              "bg-brand text-white": param === category.path,
            }
          )}
        >
          {category.title}
        </Link>
      ))}
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </div>
  );
};

export default CategoryMenu;

// Categories List
const categories = [
  { title: "All", id: "0", path: "/airdrops/all" },
  { title: "Depin", id: "1", path: "/airdrops/depin" },
  { title: "NFT", id: "2", path: "/airdrops/nft" },
  { title: "DeFi", id: "3", path: "/airdrops/defi" },
  { title: "DAO", id: "4", path: "/airdrops/dao" },
  { title: "Metaverse", id: "5", path: "/airdrops/metaverse" },
  { title: "Gaming", id: "6", path: "/airdrops/gaming" },
  { title: "Identity", id: "7", path: "/airdrops/identity" },
  { title: "Infrastructure", id: "8", path: "/airdrops/infrastructure" },
  { title: "Social", id: "9", path: "/airdrops/social" },
  { title: "Data", id: "10", path: "/airdrops/data" },
  { title: "AI", id: "11", path: "/airdrops/ai" },
];
