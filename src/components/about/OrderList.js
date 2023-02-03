import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../redux/orderSlice";

const OrderList = ({ item }) => {
  const dispatch = useDispatch();
  const [orderArr, setOrderArr] = useState([]);
  let tempArr = [];
  for (let key in item.orderOption) {
    tempArr.push(key);
  }

  useEffect(() => {
    setOrderArr(tempArr);
  }, []);

  const removeItem = () => {
    dispatch(deleteOrder(item));
  };
  return (
    <div className="border-b">
      <div className="flex mt-5 text-gray-900 font-bold ">{item.orderName}</div>

      <ul className="flex mt-5 text-gray-900 text-xs  mb-2">
        {orderArr.map((item, index) => (
          <li key={index} className="mr-2 ">
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between ">
        <button
          onClick={() => {
            removeItem();
          }}
          className=""
        >
          <img
            src="/photo/sprite_1.png"
            className="scale-50 opacity-100 "
            alt="삭제"
          ></img>
        </button>
        <span className="text-gray-900 text-sm">{item.orderMoney}원</span>
      </div>
    </div>
  );
};

export default OrderList;
