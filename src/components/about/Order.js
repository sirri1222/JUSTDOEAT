import React from "react";
import { Link } from "react-router-dom";

// redux Patch 보내서 state 업데이트
import { useDispatch, useSelector } from "react-redux";
import { clearOrder } from "../../redux/orderSlice";
import OrderList from "./OrderList";
import { useState } from "react";

const Order = () => {
  const dispatch = useDispatch();
  const orderGood = useSelector((state) => {
    // console.log(totalMoney);
    // setOrderInfo(state.order.orderGood);
    return state.order.orderGood;
  });
  const orderGoodMoney = useSelector((state) => {
    // console.log(totalMoney);
    // setOrderInfo(state.order.orderGood);
    return state.order.orderMoney;
  });
  // console.log("주문서 ORder : ", orderGood);
  const onRemove = () => {
    if (window.confirm("주문 메뉴를 모두 삭제하시겠습니까?")) {
      dispatch(clearOrder());
    }
  };

  return (
    <div className=" w-2/5 pt-6 pl-20 rounded-md">
      <div className="block rounded-lg shadow-lg bg-white text-white max-w-sm text-center">
        <div className=" flex justify-between  bg-black ">
          <p className="p-4"> 주문표 </p>

          <button onClick={onRemove}>
            <img
              src="/photo/휴지통.png"
              className="scale-50 "
              alt="제품사진"
            ></img>
          </button>
        </div>
        <div className=" bg-gray-50 ">
          <div className="px-4 py-3 text-gray-600">
            {orderGood.length > 0 ? (
              orderGood.map((item, index) => (
                <>
                  <OrderList key={index} item={item} />
                </>
              ))
            ) : (
              <span className="py-3 px-6 text-gray-900 text-sm font-medium ">
                주문표에 담긴 메뉴가 없습니다.
              </span>
            )}
          </div>
        </div>

        <span className="py-3 px-6  flex justify-between text-red-500">
          총 합계 <span>{orderGoodMoney}원</span>
        </span>

        <Link to="/buy">
          <button
            type="button"
            className=" w-full inline-block px-6 py-2.5
         bg-red-600 text-white font-medium 
         text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            결제하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Order;
