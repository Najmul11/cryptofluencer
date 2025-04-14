import Skeleton from "react-loading-skeleton";

const CategorySkeleton = () => {
  return (
    <div className="flex justify-between gap-5 !w-full">
      <div className="flex gap-5">
        <Skeleton className="h-10 !w-24" />
        <Skeleton className="h-10 !w-24" />
        <Skeleton className="h-10 !w-24" />
      </div>

      <Skeleton className="h-10 !w-56" />
    </div>
  );
};

export default CategorySkeleton;
