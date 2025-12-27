import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type PaginationProps = {
  currentPage: number; // 1-based
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
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push("ellipsis");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1);
      pages.push("ellipsis");
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push("ellipsis");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
      pages.push("ellipsis");
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const safeChange = (page: number) => {
    if (page < 1 || page > totalPages) return; // 1-based bounds
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6">
      <button
        onClick={() => safeChange(currentPage - 1)}
        disabled={currentPage === 1} // disable first page
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
                  : "hover:bg-brand/25 bg-brand/10"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => safeChange(currentPage + 1)}
        disabled={currentPage === totalPages} // disable last page
        className="flex-center size-7 rounded-sm border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
        aria-label="Next page"
      >
        <IconChevronRight size={20} className="text-black" />
      </button>
    </div>
  );
};

export default Pagination;
