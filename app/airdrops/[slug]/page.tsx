/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CategoryMenu from "@/components/airdrops/CategoryMenu";
import DropSkeleton from "@/components/skeleton/DropSkeleton";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import Pagination from "@/components/ui/Pagination";
import { useGetSingleCategoryQuery } from "@/redux/api/category";
import { useGetAllProjectsQuery } from "@/redux/api/project";
import { useParams } from "next/navigation";

const Page = () => {
  const { slug } = useParams();

  const { data: categoryProjects, isLoading: categoryProjectsLoading } =
    useGetSingleCategoryQuery(slug as string, {
      skip: slug === "all",
    });

  const { data, isLoading } = useGetAllProjectsQuery(undefined, {
    skip: slug !== "all",
  });

  return (
    <div className="wrapper  pt-3 min-h-[calc(100vh-250px)]">
      {/* <Categories /> */}
      <CategoryMenu />

      {/* <Airdrops /> */}
      {isLoading || categoryProjectsLoading ? (
        <DropSkeleton />
      ) : categoryProjects?.data?.projects.length > 0 ? (
        <HoverEffect
          items={categoryProjects?.data?.projects.map(
            (item: any) => item.project
          )}
        />
      ) : data?.data?.length > 0 ? (
        <HoverEffect items={data?.data} />
      ) : (
        <div className=" h-[calc(100vh-300px)] flex-center">
          <p className="text-center text-2xl font-medium py-6">
            There are no projects.🫥
          </p>
        </div>
      )}

      {data?.data?.length > 16 ||
        (categoryProjects?.data?.projects.length > 16 && <Pagination />)}
    </div>
  );
};

export default Page;
