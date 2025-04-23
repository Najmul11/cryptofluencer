/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { useGetAllCategoriesQuery } from "@/redux/api/category";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";
import CategorySkeleton from "../skeleton/CategorySkeleton";

const CategoryMenu = ({ search }: { search: string }) => {
  const { slug } = useParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const { data, isLoading } = useGetAllCategoriesQuery("");

  const [input, setInput] = useState(search || "");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      router.push(`/airdrops/all?search=${encodeURIComponent(input.trim())}`);
    } else router.push(`/airdrops/all`);
  };

  if (isLoading) return <CategorySkeleton />;

  const allCategories = data?.data || [];

  // Take the first 3
  const baseCategories = allCategories?.slice(0, 3);

  // Check if the current slug is NOT in the top 3
  const isActiveInMore = !baseCategories.some((cat: any) => cat.slug === slug);
  const activeCategory = isActiveInMore
    ? allCategories.find((cat: any) => cat.slug === slug)
    : null;

  // If needed, add the active one to the top list
  const displayCategories = activeCategory
    ? [...baseCategories, activeCategory]
    : baseCategories;

  return (
    <div className="flex gap-4 w-full relative">
      <div className="flex items-center gap-4">
        <Link
          href="/airdrops/all"
          className={cn(
            "flex-center gap-2 group duration-200 px-6 py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none",
            {
              "!bg-brand text-white": slug === "all",
              "hover:text-brand": slug !== "all",
            }
          )}
        >
          All
        </Link>

        {displayCategories.map((category: any) => (
          <Link
            key={category.slug}
            href={`/airdrops/${category.slug}`}
            className={cn(
              "flex-center gap-2 group duration-200 px-6 py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none",
              {
                "!bg-brand text-white": slug === category.slug,
                "hover:text-brand": slug !== category.slug,
              }
            )}
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* ########### more btn ############# */}
      <div className="">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex-center gap-2 group duration-200 px-6 py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
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
            className="absolute top-full mt-2 right-0 mx-auto w-[1280px] grid grid-cols-8 bg-white rounded-2xl border py-6 px-4 z-50 gap-2"
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
                  href={`/airdrops/${category.slug}`}
                  className={cn(
                    "flex-center gap-2 group duration-200 px-6 py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none",
                    {
                      "!bg-brand text-white": slug === category.slug,
                      "hover:text-brand": slug !== category.slug,
                    }
                  )}
                >
                  {category.name}
                </Link>
              ))}
          </motion.div>
        )}
      </div>

      <form onSubmit={handleSearch} className="flex justify-end w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="py-2 text-sm px-2 rounded border focus:border-transparent focus:outline-none border-brand border-dashed focus:ring-2 focus:!ring-brand"
          />
          <button type="submit">
            <IconSearch
              size={17}
              className="text-brand/50 absolute top-1/2 right-2 -translate-y-1/2"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryMenu;
