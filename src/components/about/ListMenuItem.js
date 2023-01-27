import React from "react";
import { useEffect, useState } from "react";
import DeliveryInfo from "../modal/DeliveryInfo";

const ListMenuItem = (props) => {
  const [isShowing, setIsShowing] = useState(false);
  const openDeliveryInfo = () => {
    setIsShowing(true);
  };
  useEffect(() => {
    console.log("isShowing", isShowing);
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
      <li onClick={openDeliveryInfo}>
        <div className="flex justify-between h-40 border-dotted border-b border-gray-300">
          <img
            src={props.item.miImg}
            className="scale-75 rounded-full w-40 shadow-lg"
            alt={props.item.miName}
          ></img>
          <div className="flex justify-center  flex-col py-4 w-3/4 ml-5 ">
            <div className="flex flex-col justify-center">
              <span>★★★★☆4.8</span>
              <span>최소주문금액 {props.item.miPrice}원</span>
              {/* 내용 협의 필요 */}
              <span>{props.item.miAdditionalEx} 결제 신용카드, 현금, JPay</span>
              <span>배달시간 40~50분</span>
            </div>
          </div>
        </div>
        {/* 팝업창 */}
        {isShowing && (
          <div style={popup}>
            <DeliveryInfo setIsShowing={setIsShowing} item={props.item} />
          </div>
        )}
      </li>
    </div>
  );
};

export default ListMenuItem;
