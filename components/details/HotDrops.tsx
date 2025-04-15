/* eslint-disable @next/next/no-img-element */
"use client";
import { HoverEffect } from "../ui/card-hover-effect";
import { useGetAllProjectsQuery } from "@/redux/api/project";
const HotDrops = () => {
  const { data } = useGetAllProjectsQuery({ showOnHomepage: "YES" });
  return (
    <div>
      <p className="text-center p-3 border bg-white  rounded-xl">🔥 Hot</p>

      <HoverEffect
        items={data?.data.slice(0, 4)}
        className="flex flex-col mt-3 py-0"
      />
    </div>
  );
};

export default HotDrops;
