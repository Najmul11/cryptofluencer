import ReactPaginate from "react-paginate";

type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

const Pagination = ({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex justify-center my-16">
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        forcePage={currentPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName="flex gap-2 p-2 rounded-md items-center gap-3"
        activeClassName="bg-brand text-white px-2 rounded"
        previousClassName="px-2 border rounded-md hover:bg-brand hover:text-white"
        nextClassName="px-2 border rounded-md hover:bg-brand hover:text-white"
        disabledClassName="opacity-50 cursor-not-allowed"
        pageClassName="hover:bg-brand/15 rounded px-2"
      />
    </div>
  );
};

export default Pagination;
