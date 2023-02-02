import React from "react";
import { span } from "react-router-dom";
import WellOrder from "../WellOrder";
import { useNavigate } from "react-router-dom";
// redux Patch 보내서 state 업데이트
import { useDispatch } from "react-redux";
import { cateUpdate } from "../../redux/cateSliced";

const DetailNav = ({ item }) => {
  const dispatch = useDispatch();
  const changeCate = (_cate) => {
    dispatch(cateUpdate({ cate: _cate }));
  };
  return (
    <div>
      <nav className="bg-gray-80 flex px-5 justify-between items-center 
      rounded-md w-full p-3 border-b ">
        <div className="flex">
          <ol className="list-reset flex justify-start ">
            <li>
              <span
                onClick={() => {
                  changeCate("중국집");
                }}
                className="cursor-pointer text-gray-600 mr-6  whitespace-nowrap
                 dark:text-white hover:underline text-base font-semibold leading-snug hover:"
              >
                중국집
              </span>
            </li>{" "}
            <li>
              <span
                onClick={() => {
                  changeCate("일식/돈까스");
                }}
                className="cursor-pointer text-gray-600 whitespace-nowrap text-base font-semibold leading-snug mr-6  dark:text-white hover:underline "
              >
                일식/돈까스
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  changeCate("분식");
                }}
                className="cursor-pointer text-gray-600 mr-6 whitespace-nowrap dark:text-white hover:underline text-base font-semibold leading-snug hover:"
              >
                분식
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  changeCate("한식");
                }}
                className="cursor-pointer text-gray-600 whitespace-nowrap text-base font-semibold leading-snug mr-6  dark:text-white hover:underline "
              >
                한식
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  changeCate("치킨");
                }}
                className="cursor-pointer text-gray-600 mr-6  dark:text-white hover:underline whitespace-nowrap text-base font-semibold leading-snug hover:"
              >
                치킨
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  changeCate("피자/양식");
                }}
                className="cursor-pointer text-gray-600  text-base font-semibold leading-snug mr-6 whitespace-nowrap dark:text-white hover:underline hover:"
              >
                피자/양식
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  changeCate("프랜차이즈");
                }}
                className="cursor-pointer text-gray-600 mr-6  dark:text-white hover:underline whitespace-nowrap text-base font-semibold leading-snug hover:"
              >
                프랜차이즈
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  changeCate("편의점/마트");
                }}
                className="cursor-pointer text-gray-600 mr-6  dark:text-white hover:underline whitespace-nowrap text-base font-semibold leading-snug hover:"
              >
                편의점/마트
              </span>
            </li>{" "}
            <li>
              <span
                onClick={() => {
                  changeCate("족발/보쌈");
                }}
                className="cursor-pointer text-gray-600 mr-6  dark:text-white hover:underline whitespace-nowrap text-base font-semibold leading-snug hover:"
              >
                족발/보쌈
              </span>
            </li>{" "}
            <li>
              <span
                onClick={() => {
                  changeCate("카페/디저트");
                }}
                className="cursor-pointer text-gray-600 mr-6  dark:text-white hover:underline whitespace-nowrap text-base font-semibold leading-snug hover:"
              >
                카페/디저트
              </span>
            </li>{" "}
            <li>
              <span
                onClick={() => {
                  changeCate("야식");
                }}
                className="cursor-pointer text-gray-600 mr-6  dark:text-white hover:underline whitespace-nowrap text-base font-semibold leading-snug hover:"
              >
                야식
              </span>
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
