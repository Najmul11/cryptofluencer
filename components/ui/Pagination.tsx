import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <div className="flex justify-center my-16">
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={5}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={() => {}}
        containerClassName="flex gap-2 p-2 rounded-md items-center gap-3"
        activeClassName="bg-brand text-white px-2  rounded transition-all duration-200 hover:bg-brand/90 "
        previousClassName="px-1  border rounded-md transition-all duration-200 hover:bg-brand hover:text-white hover:shadow-sm"
        nextClassName="px-1  border rounded-md transition-all duration-200 hover:bg-brand hover:text-white hover:shadow-sm"
        disabledClassName="opacity-50 cursor-not-allowed"
        pageClassName="transition-all duration-200 hover:bg-brand/15  rounded px-2 "
      />
    </div>
  );
};

export default Pagination;
