import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import requests from "../../api/request";
import instance from "../../api/axios";
const ListItem = ({item}) => {
  console.log(item);
  return (
    <div>
      <div className="flex flex-col max-w-3xl border-b-2 p-6 mx-auto sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img
              className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
              src="/photo/KFC_1.jpg"
              alt="Polaroid camera"
            />{" "}
            <li className="flex justify-between w-full my-auto ">
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold leading-snug">{item.siName}</h3>
                <div className="flex flex-col ">
                  <span className="text-sm  "><span className="font-bold ">open </span>- <span className="font-bold ">close </span></span>
                  <span className="text-sm"><span className="font-bold ">최소주문금액 </span> {item.menuInfo[0].miPrice}원</span>
                  <span className="text-sm">결제 신용카드, 현금,JPay</span>
                  <span className="text-sm">배달시간 {item.siMinDeliveryTime}~{item.siMaxDeliveryTime} </span>
                </div>
              </div>
              <div className="flex text-sm divide-x"></div>
              <div className="text-right">
                <button
                  type="button"
                  className="text-white mt-7 bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  선택하기
                </button>
              </div>
            </li>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
