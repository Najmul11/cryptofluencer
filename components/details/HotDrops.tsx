/* eslint-disable @next/next/no-img-element */
"use client";
import { Skull } from "../skeleton/DropSkeleton";
import { HoverEffect } from "../ui/card-hover-effect";
import { useGetAllProjectsQuery } from "@/redux/api/project";
const HotDrops = () => {
  const { data, isLoading } = useGetAllProjectsQuery({ showOnHomepage: "YES" });
  return (
    <div className="max-md:mt-6">
      <p className="text-center p-3 border font-semibold  bg-gradient-to-br from-brand to-white  rounded-xl">
        🔥 Hot
      </p>

      {isLoading ? (
        <div className="flex flex-col gap-5 mt-5">
          <Skull />
          <Skull />
          <Skull />
        </div>
      ) : (
        <div className=" ">
          <div className="overflow-y-auto custom-scroll mt-8 max-h-[calc(100vh-23vh)] ">
            <HoverEffect
              items={data?.data}
              className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 lgOne:grid-cols-1 !py-0 !my-0"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HotDrops;
