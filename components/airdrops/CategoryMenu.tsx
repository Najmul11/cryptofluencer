/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { useGetAllCategoriesQuery } from "@/redux/api/category";
import {
  IconArrowDown,
  IconChevronDown,
  IconChevronUp,
  IconDoorEnter,
} from "@tabler/icons-react";

const CategoryMenu = () => {
  const { slug } = useParams();
  const [showDropdown, setShowDropdown] = useState(false);

  const { data, isLoading } = useGetAllCategoriesQuery("");

  return (
    <div className="flex justify-between   relative">
      <div className=" flex items-center gap-4">
        {data?.data.length > 0 &&
          data?.data.slice(0, 3).map((category: any) => (
            <Link
              key={category.slug}
              href={category.slug}
              className={cn(
                "flex-center gap-2 group duration-200    px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none",
                {
                  "!bg-brand text-white": slug === category?.slug,
                  "hover:text-brand": slug !== category?.slug,
                }
              )}
            >
              {category?.name}
            </Link>
          ))}
      </div>

      {/* More Button */}
      <div className="relative">
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

        {/* Animated Dropdown */}
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full mt-2  right-0     mx-auto w-[1280px] grid grid-cols-8 bg-white rounded-2xl border py-6  px-4 z-50 gap-2"
          >
            {data?.data.map((category: any) => (
              <Link
                key={category?.slug}
                href={category?.slug}
                className={cn(
                  "flex-center gap-2 group duration-200    px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none",
                  {
                    "!bg-brand text-white": slug === category?.slug,
                    "hover:text-brand": slug !== category?.slug,
                  }
                )}
              >
                {category?.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CategoryMenu;
