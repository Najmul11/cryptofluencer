/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import CategoryMenu from "@/components/airdrops/CategoryMenu";
import DropSkeleton from "@/components/skeleton/DropSkeleton";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Pagination from "@/components/ui/Pagination";
import { useGetSingleCategoryQuery } from "@/redux/api/category";
import { useGetAllProjectsQuery } from "@/redux/api/project";

const ITEMS_PER_PAGE = 30;

const Page = () => {
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(0);

  const { data: categoryProjects, isLoading: categoryProjectsLoading } =
    useGetSingleCategoryQuery(slug as string, {
      skip: slug === "all",
    });

  const { data, isLoading } = useGetAllProjectsQuery(undefined, {
    skip: slug !== "all",
  });

  const projects =
    slug === "all"
      ? data?.data || []
      : categoryProjects?.data?.projects?.map((item: any) => item.project) ||
        [];

  const pageCount = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const paginatedItems = projects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="wrapper pt-3 min-h-[calc(100vh-250px)]">
      <CategoryMenu />

      {isLoading || categoryProjectsLoading ? (
        <DropSkeleton />
      ) : paginatedItems.length > 0 ? (
        <HoverEffect items={paginatedItems} />
      ) : (
        <div className="h-[calc(100vh-300px)] flex-center">
          <p className="text-center text-2xl font-medium py-6">
            There are no projects. 🫥
          </p>
        </div>
      )}

      {pageCount > 1 && (
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          onPageChange={({ selected }: { selected: number }) =>
            setCurrentPage(selected)
          }
        />
      )}
    </div>
  );
};

export default Page;
