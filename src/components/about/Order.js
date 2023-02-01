import React from "react";
import { Link } from "react-router-dom";

// redux Patch 보내서 state 업데이트
import { useDispatch, useSelector } from "react-redux";
import { clearOrder } from "../../redux/orderSlice";
import OrderList from "./OrderList";

const Order = () => {
  const dispatch = useDispatch();
  const orderGood = useSelector((state) => {
    return state.order.orderGood;
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
          <p className="p-4   "> 주문표 </p>

          <button onClick={onRemove}>
            <img
              src="/photo/휴지통.png"
              className="scale-50 "
              alt="제품사진"
            ></img>
          </button>
        </div>
        <div className="p-2">
          {orderGood.length > 0 ? (
            orderGood.map((item, index) => (
              <OrderList key={index} item={item} />
            ))
          ) : (
            <span className="py-3 px-6 text-gray-900 text-md font-medium ">
              주문표에 담긴 메뉴가 없습니다.
            </span>
          )}

          <span className="py-3 px-6 border-t flex justify-between border-gray-300 text-gray-600">
            배달요금 <span>3,000원</span>
          </span>
          <span className="py-3 px-6 border-t border-b flex justify-between border-gray-300 text-gray-600">
            총 합계 <span>21,200원</span>
          </span>
        </div>

        <Link to="/shoppingbag">
          <button
            type="button"
            className=" w-full inline-block px-6 py-2.5
         bg-red-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md
         text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            장바구니로 이동하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Order;
