import React, { useState } from "react";
// redux Patch 보내서 state 업데이트
import { useDispatch } from "react-redux";
import { addOrder, deleteOrder, clearOrder } from "../../redux/orderSlice";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NumberCheck } from "../NumberCheck";

const DeliveryInfo = ({ setIsShowing, item, optionData }) => {
  const dispatch = useDispatch();
  // 옵션 목록
  const [optionList, setOptionList] = useState(optionData);
  // 옵션가격 선택수
  const [optMoney, setOptMoney] = useState(0);

  // 전체 제품 선택수
  const [count, setCount] = useState(1);
  // 전체 합산 금액
  const [totalMoney, setTotalMoney] = useState(item.miPrice);

  const hidePop = (e) => {
    // 하단 으로 click 을 전달하지 않는다.
    e.stopPropagation();
    setIsShowing(false);
  };

  // 옵션 선택시 변경 사항 적용
  const initOptionVal = {};
  const [optionVal, setOptionVal] = useState(initOptionVal);

  const changeOption = (e) => {
    // 체크 박스 클릭 대상
    const target = e.target;
    // 체크상태 파악 후 정리
    const checkState = target.checked;

    // 체크가 된경우라면 금액 그렇지 않으면 0원(3항연산)
    let money = checkState ? target.value : -target.value;
    // 글자를 숫자로 변경함
    money = parseInt(money);
    // 옵션의 가격
    setOptMoney(optMoney + money);

    const { name, value } = e.target;
    if (checkState) {
      // 옵션을 체크한 경우 처리
      setOptionVal({ ...optionVal, [name]: parseInt(value) });
    } else {
      // 옵션을 해제한 경우 처리
      const copyOption = { ...optionVal };
      for (let p in copyOption) {
        if (p === name) {
          // console.log("같은 속성 찾음", p);
          delete copyOption[p];
        }
      }
      setOptionVal(copyOption);
    }
  };

  // 제품 선택에 따른 총 가격 출력
  const [orderGood, setOrderGood] = useState({});
  useEffect(() => {
    // 제품 총 갯수 가격
    const goodCountMoney = item.miPrice * count;
    // 전체금액 =  제품 총 가격 + 옵션가격
    setTotalMoney(goodCountMoney + optMoney);
    // Dispatch 보내서 state 를 변경
    // console.log("option 내용", optionVal);
    setOrderGood({
      orderName: item.miName,
      orderCount: count,
      orderMoney: totalMoney,
      orderOption: optionVal,
    });
  }, [count, optMoney, totalMoney, optionVal]);

  // 주문표에 추가
  const handlerAddOrder = (e) => {
    // 하단 으로 click 을 전달하지 않는다.
    e.stopPropagation();
    console.log("주문표에 추가 : ", orderGood);
    dispatch(addOrder(orderGood));
    setIsShowing(false);
  };

  return (
    <div className="flex justify-center  ">
      <div className=" bg-white ">
        {/*  */}
        <div className="flex justify-between  content-center h-12 px-2 bg-gray-100">
          <span className="p-8 my-auto pt-3  pb-4 font-semibold ">
            상세 메뉴
          </span>
          <button
            className="pr-3 pt-3 font-bold cursor-pointer  text-red-600 hover:text-bl  transition  mb-4"
            onClick={hidePop}
          >
            X
          </button>
        </div>
        {/*  */}
        <div>
          <img src={item.miImg} alt="사진" className="mx-auto p-5 " />
          <div className="verflow-y-scroll">
            <h2 className="text-gray-900 pl-8 pt-2 text-xl font-semibold ">
              {item.miName}
            </h2>

            <div className="flex justify-center">
              <ul className=" rounded-lg w-96 text-gray-900 mb-5">
                <li className="px-6 flex pb-3 justify-between my-3 py-2 border-b border-gray-200 w-full rounded-t-lg">
                  <span className="font-semibold block ">가격</span>
                  <span> {item.miPrice}원</span>
                </li>
                <li className="px-6 py-1 border-b my-3 border-gray-200 w-full">
                  <p className="font-semibold block pb-3">메뉴</p>
                  <div className="flex justify-between text-xs">
                    {/* （징거버거＋스콜쳐버거베이직
                   <br />
                   ＋텐더6＋케이준후라이（M）
                   <br />
                   ＋콜라（M）2） */}
                    {item.miAdditionalEx}
                    <div className="my-auto w-20">
                      {/* 해결 필요 */}
                      <NumberCheck setCount={setCount} />
                    </div>
                  </div>
                </li>
                <li className="px-6 py-1 border-b my-3 border-gray-200 w-full">
                  <span className="font-semibold block pb-3">추가선택</span>
                  {/*  옵션 추가선택 체크박스 */}
                  <div className="block text-left mx-w-sm pb-3">
                    <ul>
                      {optionList.map((optItem) => (
                        <li key={optItem.moSeq} className="pb-1 ">
                          <label htmlFor={optItem.moName}>
                            <input
                              type="checkbox"
                              name={optItem.moName}
                              value={optItem.moPrice}
                              id={optItem.moName}
                              onChange={changeOption}
                            />
                            <span className=" px-2">
                            {optItem.moName} + {optItem.moPrice}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className="px-6 flex justify-between pt-2 text-red-500">
                  <span className="font-semibold block">총 합계</span>
                  <span> {totalMoney}원</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div
          className=" w-full  
              "
        >
          <button
            type="button"
            className=" inline-block w-1/2 px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handlerAddOrder}
          >
            주문표에 추가
          </button>

          <Link to="/buy">
            <button
              type="button"
              className="  w-1/2 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
