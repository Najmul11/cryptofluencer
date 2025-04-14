import { cn } from "@/utils/cn";
import Skeleton from "react-loading-skeleton";

const DropSkeleton = () => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-5  lg:grid-cols-3 xl:grid-cols-4  py-10 w-full"
      )}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className={cn("flex flex-col  py-6 shadow bg-white rounded-2xl")}
        >
          {/*########### logo####### */}
          <div className=" px-6  ">
            <Skeleton className="!size-14   !rounded-full mb-4 " />
          </div>

          {/* ### title */}
          <div className=" px-6 ">
            <Skeleton className="h-5 !w-3/5  mb-2 " />
          </div>

          {/* description */}
          <p className="px-6 mb-5">
            <Skeleton className="h-4" />
            <Skeleton className="h-4 mt-2 !w-4/5" />
          </p>

          <div className="flex justify-end px-6">
            <Skeleton className="h-3 !w-6 !ml-auto" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropSkeleton;
