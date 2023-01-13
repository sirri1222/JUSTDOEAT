import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div>
      <nav>
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          {/* <!-- Left links --> */}
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li className="nav-item px-2">
              <Link
                to="/about"
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              >
                about
              </Link>{" "}
            </li>
            <li className="nav-item pr-2">
              <Link
                to="/detail"
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              >
                detail
              </Link>
            </li>
            <li className="nav-item pr-2">
              <Link
                to="/idpwfind"
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              >
                idpwfind
              </Link>
            </li>
            <li className="nav-item pr-2">
              <Link
                to="/buy"
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              >
                buy
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;
