import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div
        className="flex bg-white border-b-2 border-slate-100
      "
      >
        <div className="navbar navbar-expand-sm relative flex items-center justify-between w-full ">
          <Link to="/home">
            <img
              className=" ml-10 w-20 m-3 "
              src="/photo/jdelogo-s.png"
              alt="로고"
            ></img>
          </Link>
          <div className="flex">
            <input
              type="search"
              className="  ml-20  px-20  mr-4 text font-normal
              drop-shadow
        border-gray-300 rounded transition
       ease-in-out m-0 focus:text-gray-700 focus:bg-white
        focus:border-red-600 
       focus:outline-none"
              placeholder="주소를 입력해주세요."
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={() => {}}
            />
            <button
              className="btn px-3 py-3 p bg-red-600 text-white font-medium text-xs 
              leading-tight uppercase rounded shadow-md
               hover:bg-red-700 hover:shadow-lg"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center  relative mr-10">
          <div className="flex items-center  justify-end mx-8">
           { <Link
              to="/login"
              className="
             rounded-l
             px-6
             py-2.5
             text-white
             font-medium
             text-xs
             leading-tight
             uppercase
           
             transition
             duration-150
             ease-in-out"
            >
              <img
                className="absolute top-5 left-5 w-11"
                src="/photo/bsk_info.png"
                alt="로그인"
              ></img>
            </Link>}
          </div>

          {/* <!-- Icon --> */}
          <Link to="/shoppingbag">
            <button className="text-gray-500 mr-4">
              <img
                className="absolute top-5 right-1 w-11"
                src="/photo/bak_red.png"
                alt="장바구니"
              ></img>

              <span className="text-white bg-red-600 absolute  rounded-full text-xs py-1 px-2">
                1
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
