import React from "react";
import Skeleton from "react-loading-skeleton";

const JoinusSkeleton = () => {
  return (
    <div className="grid grid-cols-6 gap-5 mt-8">
      {Array.from({ length: 12 }).map((_, i) => (
        <Skeleton key={i} className="h-11" />
      ))}
    </div>
  );
};

export default JoinusSkeleton;
