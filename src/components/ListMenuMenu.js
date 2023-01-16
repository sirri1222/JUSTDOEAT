import React from "react";
import { Link } from "react-router-dom";
const ListMenuMenu = () => {

  return (
    <div>
      {" "}
      <Link to="/DeliveryInfo">
        <div type="button"  className="flex justify-between h-40 border-dotted border-b border-gray-300">
          <img
            src="photo/KFC_2.jpg"
            className="scale-75 rounded-full w-40 shadow-lg"
            alt="제품사진"
          ></img>
          <div className="flex justify-center  flex-col py-4 w-3/4 ml-5 ">
            <div className="flex flex-col justify-center ">
              <span>★★★★☆4.8</span>
              <span>최소주문금액 11,000원</span>
              <span>결제 신용카드, 현금,JPay</span>
              <span>배달시간 40~50분</span>
            </div>
          </div>
        </div>
        
      </Link>
      <Link to="/DeliveryInfo">
        <div className="flex justify-between h-40 border-dotted border-b border-gray-300">
          <img
            src="photo/KFC_2.jpg"
            className="scale-75 rounded-full w-40 shadow-lg"
            alt="제품사진"
          ></img>
          <div className="flex justify-center  flex-col py-4 w-3/4 ml-5 ">
            <div className="flex flex-col justify-center">
              <span>★★★★☆4.8</span>
              <span>최소주문금액 11,000원</span>
              <span>결제 신용카드, 현금,JPay</span>
              <span>배달시간 40~50분</span>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/DeliveryInfo">
        <div className="flex justify-between h-40 border-dotted border-b border-gray-300">
          <img
            src="photo/KFC_2.jpg"
            className="scale-75 rounded-full w-40 shadow-lg"
            alt="제품사진"
          ></img>
          <div className="flex justify-center  flex-col py-4 w-3/4 ml-5 ">
            <div className="flex flex-col justify-center">
              <span>★★★★☆4.8</span>
              <span>최소주문금액 11,000원</span>
              <span>결제 신용카드, 현금,JPay</span>
              <span>배달시간 40~50분</span>
            </div>
          </div>
        </div>
      </Link>
      

    </div>
  );
};

export default ListMenuMenu;
