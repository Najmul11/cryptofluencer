"use client";

import { useGetSingleProjectQuery } from "@/redux/api/project";
/* eslint-disable @next/next/no-img-element */
import { useParams } from "next/navigation";
import HotDrops from "./HotDrops";
import DetailsSkeleton from "../skeleton/DetailsSkeleton";
import Details from "./Details";

const DetailsPage = () => {
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

export default DetailsPage;
