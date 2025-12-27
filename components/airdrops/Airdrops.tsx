/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import CategoryMenu from "@/components/airdrops/CategoryMenu";
import DropSkeleton from "@/components/skeleton/DropSkeleton";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useGetSingleCategoryQuery } from "@/redux/api/category";
import { useGetAllProjectsQuery } from "@/redux/api/project";
import { cn } from "@/utils/cn";
import Pagination from "../ui/Pagination";

const ITEMS_PER_PAGE = 20;

const Airdrops = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { slug } = useParams();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const { data: categoryProjects, isLoading: categoryProjectsLoading } =
    useGetSingleCategoryQuery(slug as string, { skip: slug === "all" });

  const { data, isLoading } = useGetAllProjectsQuery(
    {
      page: currentPage,
      limit: ITEMS_PER_PAGE,
      search,
    },
    {
      skip: slug !== "all",
    }
  );

  // ==================== pagination logic ====================

  const pageCount = Math.ceil(data?.data?.meta?.total / ITEMS_PER_PAGE);

  // clamp current page when dataset changes
  useEffect(() => {
    if (currentPage >= pageCount && pageCount > 0) {
      setCurrentPage(pageCount);
    }
  }, [pageCount, currentPage]);

  // reset page when slug or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [slug, search]);

  const handlePageChange = (page: number) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (page < 0) return setCurrentPage(1);
    if (page >= pageCount) return setCurrentPage(pageCount);
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="wrapper pt-3 min-h-[calc(100vh-250px)]">
        <CategoryMenu />

        {isLoading || categoryProjectsLoading ? (
          <DropSkeleton />
        ) : data?.data?.data.length > 0 ? (
          <div
            className={cn("min-h-[calc(100vh-300px)] ", {
              "mt-10": search,
            })}
          >
            {search && (
              <h2>
                Search result for &apos;<i>{search}</i>&apos;
              </h2>
            )}
            <HoverEffect items={data?.data?.data} />
          </div>
        ) : (
          <div className="h-[calc(100vh-300px)] flex-center">
            <p className="text-center text-2xl font-medium py-6">
              {search ? (
                <span>
                  Your search &apos;<i>{search}</i>&apos; has no result 🫥
                </span>
              ) : (
                "There are no projects."
              )}
            </p>
          </div>
        )}

        {pageCount > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={pageCount}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Airdrops;
