import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div>
      <div className="flex justify-center my-5">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li className="page-item">
              <Link
                className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 focus:shadow-none"
                to="/detail"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                to="/detail"
              >
                1
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                to="/detail"
              >
                2
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                to="/detail"
              >
                3
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                to="/detail"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
