import React from "react";
import Skeleton from "react-loading-skeleton";

const DetailsSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* primary  details ------ */}
      <div className="flex gap-5 ">
        <div>
          <Skeleton className="!size-44 rounded-2xl" />
          <div className="flex items-center gap-3 justify-center mt-4">
            <Skeleton className="!size-7 rounded-lg" />
            <Skeleton className="!size-7 rounded-lg" />
            <Skeleton className="!size-7 rounded-lg" />
          </div>
        </div>
        <div className="space-y-4 flex-grow">
          <Skeleton className="h-24 rounded-lg  mb-4" />

          {/* join btn -------- */}
          <div className="flex">
            <Skeleton className="h-9 !w-40 !rounded-3xl" />
          </div>
        </div>
      </div>

      <hr className="border-brand/40 border-dashed" />

      {/* details----- */}
      <div className="flex flex-col gap-4">
        <Skeleton className="!h-40 w-full rounded-lg" />
        <Skeleton className="!h-40 w-full rounded-lg" />
      </div>

      <hr className="border-brand/40 border-dashed" />

      {/* join btn -------- */}
      <div className="flex-center">
        <Skeleton className="h-9 !w-56 !rounded-3xl" />
      </div>
    </div>
  );
};

export default DetailsSkeleton;
