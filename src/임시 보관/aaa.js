import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="navbar bg-gray-700 navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between">
          <Link to="/home">
            <img
              className="mt-3 ml-3 h-20 w-40 md:h-30 md:w-30 "
              src="/photo/logoYogiyo.png"
              alt="로고"
            ></img>
          </Link>

          <div className="flex items-center justify-end mr-10">
            <Link
              to="/login"
              className="
             rounded-l
             px-6
             py-2.5
             bg-gray-800
             text-white
             font-medium
             text-xs
             leading-tight
             uppercase
             hover:bg-gray-700
             focus:bg-gray-700 focus:outline-none focus:ring-0
             active:bg-gray-800
             transition
             duration-150
             ease-in-out"
            >
              login
            </Link>
            <Link
              to="/signup"
              className="
             rounded-l
             px-6
             py-2.5
             bg-gray-800
             text-white
             font-medium
             text-xs
             leading-tight
             uppercase
             hover:bg-gray-700
             focus:bg-gray-700 focus:outline-none focus:ring-0
             active:bg-gray-800
             transition
             duration-150
             ease-in-out"
            >
              signup
            </Link>
          </div>
         
        </div> 
      </div><div className="flex items-center justify-end ">
            <Link
              to="/about"
              className="
             rounded-l
             px-6
             py-2.5
             bg-gray-800
             text-white
             font-medium
             text-xs
             leading-tight
             uppercase
             hover:bg-gray-700
             focus:bg-gray-700 focus:outline-none focus:ring-0
             active:bg-gray-800
             transition
             duration-150
             ease-in-out"
            >
              about
            </Link>{" "}
            <Link
              to="/detail"
              className="
       rounded-l
       px-6
       py-2.5
       bg-gray-800
       text-white
       font-medium
       text-xs
       leading-tight
       uppercase
       hover:bg-gray-700
       focus:bg-gray-700 focus:outline-none focus:ring-0
       active:bg-gray-800
       transition
       duration-150
       ease-in-out"
            >
              detail
            </Link>
            <Link
              to="/idpwfind"
              className="
             rounded-l
             px-6
             py-2.5
             bg-gray-800
             text-white
             font-medium
             text-xs
             leading-tight
             uppercase
             hover:bg-gray-700
             focus:bg-gray-700 focus:outline-none focus:ring-0
             active:bg-gray-800
             transition
             duration-150
             ease-in-out"
            >
              idpwfind
            </Link>
          </div>
    </div>
  );
};

export default Header;
