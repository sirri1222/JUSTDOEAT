import React from "react";

const ListItem = () => {
  return (
    <div>
      {" "}
      <li className="flex justify-between w-full my-auto ">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold leading-snug">가게이름</h3>
          <div className="flex flex-col ">
            <span className="text-sm ">★★★★☆4.8</span>
            <span className="text-sm">최소주문금액 11,000원</span>
            <span className="text-sm">결제 신용카드, 현금,JPay</span>
            <span className="text-sm">배달시간 40~50분</span>
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
      </li>
    </div>
  );
};

export default ListItem;
