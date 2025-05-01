"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { useGetAllCategoriesQuery } from "@/redux/api/category";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const HotDrops = () => {
  const { data, isLoading } = useGetAllCategoriesQuery("");
  return (
    <div>
      {isLoading ? (
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2">
          <Skeleton className="h-[70px]" />
          <Skeleton className="h-[70px]" />
          <Skeleton className="h-[70px]" />
          <Skeleton className="h-[70px]" />
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2">
          {data?.data?.slice(0, 3).map((category: any, index: number) => (
            <Link
              key={category.slug}
              href={`/airdrops/${category.slug}`}
              className="py-2 md:py-3  border-2 border-brand hover:text-white group duration-200 rounded-lg flex justify-center items-center text-lg md:text-xl font-semibold relative overflow-hidden"
            >
              {index !== 3 && <span className="text-2xl">🔥</span>}{" "}
              {category.name}
              {/* Background transition effect */}
              <span className="absolute h-[300px] -translate-x-2 group-hover:translate-x-0 w-full bg-brand md:scale-x-[15%] scale-x-[30%] rotate-6 group-hover:rotate-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 block"></span>
            </Link>
          ))}

          <Link
            href={`/airdrops/all`}
            className="py-2 md:py-3 border-2 border-brand hover:text-white group duration-200 rounded-lg flex justify-center items-center text-lg md:text-xl font-semibold relative overflow-hidden"
          >
            All
            {/* Background transition effect */}
            <span className="absolute h-[300px] -translate-x-2 group-hover:translate-x-0 w-full bg-brand md:scale-x-[15%] scale-x-[30%] rotate-6 group-hover:rotate-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 block"></span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HotDrops;
