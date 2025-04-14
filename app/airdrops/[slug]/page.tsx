/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import Categories from "@/components/airdrops/Categories";
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

  const { data, isLoading } = useGetAllProjectsQuery("", {
    skip: slug !== "all",
  });
  console.log(data);

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
      ) : (
        <HoverEffect items={data?.data} />
      )}

      {data?.data?.length > 16 ||
        (categoryProjects?.data?.projects.length > 16 && <Pagination />)}
    </div>
  );
};

export default Page;
