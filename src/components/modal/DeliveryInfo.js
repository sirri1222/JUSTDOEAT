import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NumberCheck } from "../NumberCheck";

const DeliveryInfo = ({ setIsShowing, item }) => {
  // console.log("주문창 item", item);
  // 전체 제품 선택수
  const [count, setCount] = useState(1);
  // 옵션가격 선택수
  const [optMoney, setOptMoney] = useState(0);
  // 전체 합산 금액
  const [totalMoney, setTotalMoney] = useState(item.miPrice);
  // 제품 선택에 따른 총 가격 출력
  useEffect(() => {
    // 제품 총 갯수 가격
    const goodCountMoney = item.miPrice * count;
    // 전체금액 =  제품 총 가격 + 옵션가격
    setTotalMoney(goodCountMoney + optMoney);
  }, [count, optMoney]);

  const hidePop = (e) => {
    // 하단 으로 click 을 전달하지 않는다.
    e.stopPropagation();
    setIsShowing(false);
  };
  // 옵션 선택시 변경 사항 적용
  const changeOption = (e) => {
    // 체크 박스 클릭 대상
    const target = e.target;
    // 체크가 된경우라면 금액 그렇지 않으면 0원(3항연산)
    let value = target.checked ? target.value : -target.value;
    // 글자를 숫자로 변경함
    value = parseInt(value);
    // 옵션의 가격
    setOptMoney(optMoney + value);
  };

  return (
    <div className="flex justify-center ">
      <div className=" bg-white ">
        {/*  */}
        <div className="flex justify-between  content-center h-10 px-2 bg-gray-100">
          <span className="p-8 pt-2  pb-6 font-semibold ">상세 메뉴</span>
          <button
            className="pr-3 pt-2 font-bold cursor-pointer  text-red-600 hover:text-bl  transition  mb-4"
            onClick={hidePop}
          >
            X
          </button>
        </div>
        {/*  */}
        <div className="overflow-y-scroll">
          <img src="photo/KFC_2.jpg" alt="사진" className="mx-auto p-5 " />
          <div className="bg-gray-100 ">
            <h2 className="text-gray-900 pl-8 pt-6 text-xl font-semibold ">
              {item.miName}
            </h2>
            <div className="flex justify-center">
              <ul className=" rounded-lg w-96 text-gray-900 mb-10">
                <li className="px-6 flex justify-between my-3 py-2 border-b border-gray-200 w-full rounded-t-lg">
                  <span className="font-semibold block ">가격</span>
                  <span> {item.miPrice}원</span>
                </li>
                <li className="px-6 py-2 border-b my-3 border-gray-200 w-full">
                  <p className="font-semibold block ">메뉴</p>
                  <p className="flex justify-between">
                    {/* （징거버거＋스콜쳐버거베이직
                   <br />
                   ＋텐더6＋케이준후라이（M）
                   <br />
                   ＋콜라（M）2） */}
                    {item.miAdditionalEx}
                    <span className="my-auto w-20">
                      {/* 해결 필요 */}
                      <NumberCheck setCount={setCount} />
                    </span>
                  </p>
                </li>
                <li className="px-6 py-2 border-b my-3 border-gray-200 w-full">
                  <span className="font-semibold block ">추가선택</span>
                  {/*  추가선택 체크박스 */}
                  <div className="block text-left mx-w-sm">
                    <ul>
                      {item.option.map((optItem, index) => (
                        <li key={index}>
                          <label htmlFor={optItem.moName}>
                            <input
                              type="checkbox"
                              name={optItem.moName}
                              value={optItem.moPrice}
                              id={optItem.moName}
                              onChange={changeOption}
                            />
                            {optItem.moName} +{optItem.moPrice}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className="px-6 flex justify-between  border-b border-gray-200 w-full rounded-t-lg">
                  <span className="font-semibold block ">총 합계</span>
                  <span> {totalMoney}원</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div
          className=" w-full  
               bg-blue-300"
        >
          <button
            type="button"
            className=" inline-block w-1/2 px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            주문표에 추가
          </button>

          <Link to="/buy">
            <button
              type="button"
              className="  w-1/2 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              주문하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
