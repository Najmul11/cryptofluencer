"use client";

/* eslint-disable @next/next/no-img-element */
import Details from "@/components/details/Details";
import HotDrops from "@/components/details/HotDrops";
import { useGetSingleProjectQuery } from "@/redux/api/project";
import React from "react";
import { useParams } from "next/navigation";
import DetailsSkeleton from "@/components/skeleton/DetailsSkeleton";

const Page = () => {
  const { slug } = useParams();
  const { data: projectData, isLoading } = useGetSingleProjectQuery(
    slug as string
  );

  return (
    <div className="wrapper  pt-16">
      <div className="min-h-screen grid grid-cols-3 gap-5">
        {/* --hot drops-- */}
        <HotDrops />
        {/* details */}
        <div className="col-span-2 ">
          <div className="border p-5 rounded-2xl bg-white">
            {isLoading ? (
              <DetailsSkeleton />
            ) : (
              <Details data={projectData?.data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
