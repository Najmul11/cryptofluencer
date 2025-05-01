import Skeleton from "react-loading-skeleton";

const BannerSkeleton = () => {
  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2 gap-5">
      {Array.from({ length: 2 }).map((_, i) => (
        <Skeleton key={i} className="h-[170px] w-full rounded-md" />
      ))}
    </div>
  );
};

export default BannerSkeleton;
