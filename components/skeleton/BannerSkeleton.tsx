import Skeleton from "react-loading-skeleton";

const BannerSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-5  ">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-[170px]" />
      ))}
    </div>
  );
};

export default BannerSkeleton;
