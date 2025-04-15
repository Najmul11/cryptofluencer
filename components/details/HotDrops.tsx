/* eslint-disable @next/next/no-img-element */
"use client";
import { Skull } from "../skeleton/DropSkeleton";
import { HoverEffect } from "../ui/card-hover-effect";
import { useGetAllProjectsQuery } from "@/redux/api/project";
const HotDrops = () => {
  const { data, isLoading } = useGetAllProjectsQuery({ showOnHomepage: "YES" });
  return (
    <div>
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
        <HoverEffect
          items={data?.data.slice(0, 3)}
          className="flex flex-col mt-5 py-0"
        />
      )}
    </div>
  );
};

export default HotDrops;
