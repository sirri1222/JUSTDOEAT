import React from "react";
import { Link } from "react-router-dom";
import WellOrder from "../WellOrder";

const DetailNav = ({item}) => {
  return (
    <div>
      <nav className="bg-gray-80 flex px-5 justify-between items-center rounded-md w-full p-3">
        <div className="flex">
          <ol className="list-reset flex justify-start ">
          <li>
              <Link
                to="/detail"
                className="text-gray-600 mr-6  dark:text-white hover:underline text-lg font-semibold leading-snug hover:"
              >
                중식
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/detail"
                className="text-gray-600  text-lg font-semibold leading-snug mr-6  dark:text-white hover:underline "
              >
                일식
              </Link>
            </li>
            <li>
              <Link
                to="/detail"
                className="text-gray-600 mr-6  dark:text-white hover:underline text-lg font-semibold leading-snug hover:"
              >
                분식
              </Link>
            </li>
            <li>
              <Link
                to="/detail"
                className="text-gray-600  text-lg font-semibold leading-snug mr-6  dark:text-white hover:underline "
              >
                한식
              </Link>
            </li>
            <li>
              <Link
                to="/detail"
                className="text-gray-600  text-lg font-semibold leading-snug mr-6  dark:text-white hover:underline hover:"
              >
                피자
              </Link>
            </li>
            <li>
              <Link
                to="/detail"
                className="text-gray-600 mr-6  dark:text-white hover:underline text-lg font-semibold leading-snug hover:"
              >
                치킨
              </Link>
            </li>
            <li>
              <Link
                to="/detail"
                className="text-gray-600 mr-6  dark:text-white hover:underline text-lg font-semibold leading-snug hover:"
              >
                핫도그
              </Link>
            </li>
            <li>
              <Link
                to="/detail"
                className="text-gray-600 mr-6  dark:text-white hover:underline text-lg font-semibold leading-snug hover:"
              >
                편의점
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/detail"
                className="text-gray-600 mr-6  dark:text-white hover:underline text-lg font-semibold leading-snug hover:"
              >
                족발보쌈
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/detail"
                className="text-gray-600 mr-6  dark:text-white hover:underline text-lg font-semibold leading-snug hover:"
              >
                카페디저트
              </Link>
            </li>{" "}
          </ol>
        </div>
        <div className="justify-end flex">
          <WellOrder />
        </div>
      </nav>
    </div>
  );
};

export default DetailNav;
