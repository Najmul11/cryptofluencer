"use client";

/* eslint-disable @next/next/no-img-element */
import { useGetSingleProjectQuery } from "@/redux/api/project";
import { useParams } from "next/navigation";
import HotDrops from "./HotDrops";
import DetailsSkeleton from "../skeleton/DetailsSkeleton";
import Details from "./Details";
import NotFound from "@/app/not-found";

const DetailsPage = () => {
  const { slug } = useParams();
  const { data: projectData, isLoading } = useGetSingleProjectQuery(
    slug as string
  );

  if (!isLoading && !projectData?.data) {
    return <NotFound />;
  }

  return (
    <div className="wrapper  pt-16">
      <div className="min-h-screen grid grid-cols-1 lgOne:grid-cols-3 gap-5">
        {/* details - top on mobile, left on desktop */}
        <div className="order-1 lgOne:order-2 col-span-1 lgOne:col-span-2">
          <div className="border p-5 rounded-2xl bg-white">
            {!isLoading ? (
              <DetailsSkeleton />
            ) : (
              <Details data={projectData?.data} />
            )}
          </div>
        </div>

        {/* hot drops - bottom on mobile, right on desktop */}
        <div className="order-2 lgOne:order-1">
          <HotDrops />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
