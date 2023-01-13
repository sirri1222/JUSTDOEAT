import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
<<<<<<< HEAD
    <div>
      <div className="flex flex-row">
        <div className="navbar bg-gray-700 navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between">
          <Link to="/home">
            <img
              className="mt-3 ml-3 h-20 w-40 md:h-30 md:w-30"
              src="/photo/JUSTDOEAT2.png"
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
      </div>
  
=======
    <div className="flex flex-row">
      <Link to="/home">Home</Link>|<Link to="/about">about</Link>|
      <Link to="/detail">detail</Link>|<Link to="/idpwfind">idpwfind</Link>|
      <Link to="/login">login</Link>|<Link to="/notfound">notfound</Link>|
      <Link to="/signup">signup</Link>|<Link to="/listmenu">ListMenu</Link>
>>>>>>> 0c1fbe8802a9ac8d6906012583ba0c0b13a0288b
    </div>
  );
};

export default Header;
