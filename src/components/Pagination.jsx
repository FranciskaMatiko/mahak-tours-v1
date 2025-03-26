import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-lg border ${
          currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-700 text-white"
        }`}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((num, index) => (
        <button
          key={index}
          onClick={() => num !== "..." && onPageChange(num)}
          className={`px-4 py-2 rounded-lg border transition ${
            num === "..."
              ? "bg-transparent text-gray-500 cursor-default"
              : num === currentPage
              ? "bg-orange-600 text-white font-bold"
              : "bg-orange-100 text-orange-700 hover:bg-orange-300"
          }`}
          disabled={num === "..."}
        >
          {num}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-lg border ${
          currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-700 text-white"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
