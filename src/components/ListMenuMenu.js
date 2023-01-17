import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeliveryInfo from "./DeliveryInfo";
const ListMenuMenu = () => {
  const [isShowing, setIsShowing] = useState(false);
  const openDeliveryInfo = () => {
    setIsShowing(true);
  };
  useEffect(() => {
    console.log("isShowing", isShowing);
    // if (isShowing) {
    //   const notiTimer = setTimeout(() => {
    //     setIsShowing(false);
    //   }, 3000);
    //   return () => clearTimeout(notiTimer);
    // }
  }, [isShowing]);

  // 팝업창 css
  const popup = {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 9,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      {" "}
      <div onClick={openDeliveryInfo}>
        <div
          type="button"
          className="flex justify-between h-40 border-dotted border-b border-gray-300"
        >
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
      </div>
      <div onClick={openDeliveryInfo}>
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
      </div>
      <div onClick={openDeliveryInfo}>
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
        {/* 팝업창 */}
        {isShowing && (
          <div style={popup}>
            <DeliveryInfo setIsShowing={setIsShowing} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListMenuMenu;
