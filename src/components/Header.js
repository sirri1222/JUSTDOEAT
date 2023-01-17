import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div>
     
      <div className="flex flex-row">
        <div className="navbar bg-gray-700 navbar-expand-lg shadow-md py-4 relative flex items-center w-full justify-between">
          <Link to="/home">
            <img
              className=" ml-10 h-full w-40 "
              src="/photo/logoYogiyo.png"
              alt="로고"
            ></img>
          </Link>
 <div className="flex items-center relative mr-20">
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
              className="rounded-l px-6 py-2.5 bg-gray-800             text-white             font-medium             text-xs
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

    
 
  {/* <!-- Icon --> */}
  <Link to="/shoppingbag">
  <button className="text-gray-500 mr-4" >
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
      className="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512">
      <path fill="currentColor"
        d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
      </path>
    </svg>
    <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">1</span>
  </button>
  
 </Link>
  
  </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
