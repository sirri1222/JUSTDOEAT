import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div
        className="flex bg-black
      "
      >
        <div className="navbar navbar-expand-sm py-1 relative flex items-center justify-between w-full ">
          <Link to="/home">
            <img
              className=" ml-10 w-20 m-6 "
              src="/photo/jdelogo-s.png"
              alt="로고"
            ></img>
          </Link>
          <div className="flex">
            <input
              type="search"
              className="  ml-20  px-10 py-1.5 text-base font-normal

       text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
       ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
              placeholder="주소를 입력해주세요."
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={() => {}}
            />
            <button
              className="btn px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
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
            <Link
              to="/login"
              className="
             rounded-l
             px-6
             py-2.5
             bg-gray-900
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
                className="absolute top-9 left-5 w-11"
                src="/photo/infouser.png"
                alt="로그인"
              ></img>
            </Link>
            {/* <Link
              to="/signup"
              className="rounded-l px-6 py-2.5 bg-gray-900  text-white font-medium text-xs
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
            </Link> */}
          </div>

          {/* <!-- Icon --> */}
          <Link to="/shoppingbag">
            <button className="text-gray-500 mr-4">
              {/* <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="shopping-cart"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                ></path>
              </svg> */}

              <img
                className="absolute top-9 right-1 w-11"
                src="/photo/basket.png"
                alt="장바구니"
              ></img>

              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
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
