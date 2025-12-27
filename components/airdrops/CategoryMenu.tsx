/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { useGetAllCategoriesQuery } from "@/redux/api/category";
import { IconChevronDown } from "@tabler/icons-react";
import CategorySkeleton from "../skeleton/CategorySkeleton";

const CategoryMenu = () => {
  const path = usePathname();
  const urlParams = useSearchParams();

  const [showDropdown, setShowDropdown] = useState(false);
  const { data, isLoading } = useGetAllCategoriesQuery("");

  if (isLoading) return <CategorySkeleton />;

  const allCategories = data?.data || [];

  // Take the first 6
  const baseCategories = allCategories?.slice(0, 6);

  // Check if the current slug is NOT in the top 6
  const isActiveInMore = !baseCategories.some(
    (cat: any) => cat.slug === urlParams.get("category")
  );
  const activeCategory = isActiveInMore
    ? allCategories.find((cat: any) => cat.slug === urlParams.get("category"))
    : null;

  // If needed, add the active one to the top list
  const displayCategories = activeCategory
    ? [...baseCategories, activeCategory]
    : baseCategories;

  return (
    <div className="flex gap-4 w-full relative max-md:hidden">
      <div className="flex items-center gap-4  flex-shrink-0">
        <Link
          href="/airdrops"
          className={cn(
            "flex-center gap-2 group duration-200 px-6 py-2 bg-brand/20  text-sm font-medium rounded select-none",
            {
              "!bg-brand text-white":
                path === "/airdrops" && !urlParams.get("category"),
              "hover:text-brand":
                path === "/airdrops" && urlParams.get("category"),
            }
          )}
        >
          All
        </Link>

        {displayCategories.map((category: any) => (
          <Link
            key={category.slug}
            href={`/airdrops?category=${category.slug}`}
            className={cn(
              "flex-center gap-2 group duration-200 px-6 py-2 bg-brand/20  text-sm font-medium rounded select-none",
              {
                "!bg-brand text-white":
                  urlParams.get("category") === category.slug,
                "hover:text-brand": urlParams.get("category") !== category.slug,
              }
            )}
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* ########### more btn ############# */}
      <div className="flex-shrink-0">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex-center gap-2 group duration-200 px-6 py-2 bg-brand/20  text-sm font-medium rounded select-none hover:text-brand"
        >
          More
          <motion.div
            animate={{ rotate: showDropdown ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconChevronDown size={20} />
          </motion.div>
        </button>

        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full mt-2 right-0 mx-auto w-[1280px] grid grid-cols-8 bg-midnightblue rounded-2xl py-6 px-4 z-50 gap-2"
          >
            {allCategories
              .filter(
                (cat: any) =>
                  !displayCategories.some(
                    (shown: any) => shown.slug === cat.slug
                  )
              )
              .map((category: any) => (
                <Link
                  key={category.slug}
                  href={`/airdrops?category=${category.slug}`}
                  className={cn(
                    "flex-center gap-2 group duration-200 px-6 py-2 bg-brand/20  text-sm font-medium rounded select-none",
                    {
                      "!bg-brand text-white":
                        urlParams.get("category") === category.slug,
                      "hover:text-brand":
                        urlParams.get("category") !== category.slug,
                    }
                  )}
                >
                  {category.name}
                </Link>
              ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CategoryMenu;
