import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type PaginationProps = {
  currentPage: number; // 0-based
  totalPages: number; // total page count
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 0; i < totalPages; i++) pages.push(i);
      return pages;
    }

    if (currentPage <= 2) {
      for (let i = 0; i < 5; i++) pages.push(i);
      pages.push("ellipsis");
      pages.push(totalPages - 1);
    } else if (currentPage >= totalPages - 3) {
      pages.push(0);
      pages.push("ellipsis");
      for (let i = totalPages - 5; i < totalPages; i++) pages.push(i);
    } else {
      pages.push(0);
      pages.push("ellipsis");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
      pages.push("ellipsis");
      pages.push(totalPages - 1);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const safeChange = (page: number) => {
    if (page < 0 || page >= totalPages) return;
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6">
      <button
        onClick={() => safeChange(currentPage - 1)}
        disabled={currentPage === 0}
        className="flex-center size-7 rounded-sm border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
        aria-label="Previous page"
      >
        <IconChevronLeft size={20} className="text-black" />
      </button>

      <div className="flex items-center gap-2 ">
        {pageNumbers.map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-500"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => safeChange(page)}
              className={`size-7 rounded-sm font-medium text-sm sm:text-base transition-colors ${
                currentPage === page
                  ? "bg-brand text-white hover:bg-brand"
                  : "hover:bg-brand/25 bg-brand/10  "
              }`}
            >
              {page + 1}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => safeChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className="flex-center size-7 rounded-sm border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
        aria-label="Next page"
      >
        <IconChevronRight size={20} className="text-black " />
      </button>
    </div>
  );
};

export default Pagination;
