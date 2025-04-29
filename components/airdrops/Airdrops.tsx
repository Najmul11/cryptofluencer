/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import CategoryMenu from "@/components/airdrops/CategoryMenu";
import DropSkeleton from "@/components/skeleton/DropSkeleton";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Pagination from "@/components/ui/Pagination";
import { useGetSingleCategoryQuery } from "@/redux/api/category";
import { useGetAllProjectsQuery } from "@/redux/api/project";
import { cn } from "@/utils/cn";

const ITEMS_PER_PAGE = 20;

const Airdrops = () => {
  const { slug } = useParams();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";

  const { data: categoryProjects, isLoading: categoryProjectsLoading } =
    useGetSingleCategoryQuery(slug as string, {
      skip: slug === "all",
    });

  const { data, isLoading } = useGetAllProjectsQuery(undefined, {
    skip: slug !== "all",
  });

  const [currentPage, setCurrentPage] = useState(0);

  const projects =
    slug === "all"
      ? data?.data || []
      : categoryProjects?.data?.projects?.map((item: any) => item.project) ||
        [];

  const filteredProjects =
    slug === "all" && search
      ? projects
          .filter((project: any) => {
            const lowerSearch = search.toLowerCase();
            return (
              ["name", "slug", "status", "inviteURL", "inviteCode"].some(
                (key) =>
                  String(project[key]).toLowerCase().includes(lowerSearch)
              ) ||
              project.platform?.name?.toLowerCase().includes(lowerSearch) ||
              project.categories?.some((cat: any) =>
                cat.category?.name?.toLowerCase().includes(lowerSearch)
              )
            );
          })
          .sort((a: any, b: any) => {
            const lowerSearch = search.toLowerCase();
            const aNameMatch = a.name?.toLowerCase().includes(lowerSearch);
            const bNameMatch = b.name?.toLowerCase().includes(lowerSearch);

            // Prioritize name match
            if (aNameMatch && !bNameMatch) return -1;
            if (!aNameMatch && bNameMatch) return 1;
            return 0; // Maintain relative order for other matches
          })
      : projects;

  const pageCount = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredProjects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="wrapper pt-3 min-h-[calc(100vh-250px)]">
      <CategoryMenu search={search} />

      {isLoading || categoryProjectsLoading ? (
        <DropSkeleton />
      ) : paginatedItems.length > 0 ? (
        <div className={cn({ "mt-10": search })}>
          {search && (
            <h2>
              Search result for &apos;<i>{search}</i>&apos;
            </h2>
          )}
          <HoverEffect items={paginatedItems} />
        </div>
      ) : (
        <div className="h-[calc(100vh-300px)] flex-center">
          <p className="text-center text-2xl font-medium py-6">
            {search ? (
              <span>
                Your search &apos;<i>{search}</i>&apos; has no result 🫥
              </span>
            ) : (
              "There are no projects. "
            )}
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

export default Airdrops;
