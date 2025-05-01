import Skeleton from "react-loading-skeleton";

const BannerSkeleton = () => {
  return (
    <div className="  ">
      {Array.from({ length: 1 }).map((_, i) => (
        <Skeleton key={i} className="h-[170px] w-full" />
      ))}
    </div>
  );
};

export default BannerSkeleton;
