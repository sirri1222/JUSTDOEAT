import React from "react";
import { Link } from "react-router-dom";

const DeliveryInfo = ({ setIsShowing }) => {
  const hidePop = (e) => {
    // 하단 으로 click 을 전달하지 않는다.
    e.stopPropagation();
    setIsShowing(false);
  };
  return (
    <div className="flex  justify-center">
      <div className=" bg-black p-8 ">
        <div className="flex justify-between content-center h-10 px-2 bg-white">
          <span className="p-8 pt-2 pb-6">상세 메뉴</span>
          <button className=" p-8 pt-2 pb-6 " onClick={hidePop}>
            X
          </button>
        </div>

        <img src="photo/KFC_2.jpg" alt="사진" className="mx-auto "></img>

        <div className="bg-gray-100 p-8 ">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            요기요）복마니버거팩
          </h5>
          <p className="text-gray-700 text-base mb-4 ">
            오직 요기요에서만 만나는 특별한 구성
            （징거버거＋스콜쳐버거베이직＋텐더6＋케이준후라이（M）＋콜라（M）2）
          </p>
          <span>가격 25,700원</span>
          <br />
          <span>수량 + 1 -</span>
          <br />
          <span>총 주문금액25,700원 </span>
          <br />
          <span>(최소주문금액 11,000원)</span>
          <br />
          <div
            className="mb-2 w-full inline-block 
               bg-blue-300"
          >
            <button
              type="button"
              className=" inline-block w-1/2 px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              주문표에 추가
            </button>
            <button
              type="button"
              className=" inline-block w-1/2 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
