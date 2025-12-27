/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSearchParams, useRouter } from "next/navigation";
import CategoryMenu from "@/components/airdrops/CategoryMenu";
import DropSkeleton from "@/components/skeleton/DropSkeleton";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useGetAllProjectsQuery } from "@/redux/api/project";
import { cn } from "@/utils/cn";
import Pagination from "../ui/Pagination";

const ITEMS_PER_PAGE = 20;

const Airdrops = () => {
  const urlParams = useSearchParams();
  const search = urlParams.get("search") || "";
  const category = urlParams.get("category") || "";
  const page = urlParams.get("page") || 1;

  const router = useRouter();

  const { data, isLoading } = useGetAllProjectsQuery(
    {
      page: Number(page) || 1,
      limit: ITEMS_PER_PAGE,
      search,
      category,
    }
    // {
    //   skip: slug !== "all",
    // }
  );

  // ==================== pagination logic ====================

  const pageCount = Math.ceil(data?.data?.meta?.total / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > pageCount) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const params = new URLSearchParams();
    // page is always valid
    params.set("page", page.toString());

    // only add if exists
    if (category) {
      params.set("category", category);
    }

    if (search) {
      params.set("search", search);
    }
    router.push(`/airdrops?${params.toString()}`);
  };

  return (
    <div>
      <div className="wrapper pt-3 min-h-[calc(100vh-250px)]">
        <CategoryMenu />

        {isLoading ? (
          <DropSkeleton />
        ) : data?.data?.data?.length > 0 ? (
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
            currentPage={Number(page)}
            totalPages={pageCount}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Airdrops;
