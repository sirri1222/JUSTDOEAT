import React from "react";

const StoreInfo = ({ item }) => {
  return (
    <div>
      <div className=" bg-white border-b-2 border-gray-200 p-2">
        <div className=" py-3  ">
          <img
            src="/photo/bell.PNG"
            className=" scale-75 "
            alt="사장님 알림"
          ></img>
          <p className="text-xs ml-4">{item.sdAlarmContent}</p>
        </div>
      </div>
      <div className=" bg-white border-b-2 border-gray-200 p-2">
        <div className="py-3  ">
          <img
            src="/photo/card.PNG"
            className=" scale-75 "
            alt="결제정보"
          ></img>
          <p className="text-xs ml-4">
            <span className=" text-gray-500 leading-5">최소주문금액</span> |{" "}
            {item.sdMinPrice}원
            <br />
            <span className=" text-gray-500 leading-5">결제수단</span> |{" "}
            {item.sdPayment}
          </p>
        </div>
      </div>
      <div className=" bg-white border-b-2 border-gray-200 p-2">
        <div className="py-3  ">
          <img
            src="/photo/info.PNG"
            className=" scale-75 "
            alt="사업자정보"
          ></img>
          <p className="text-xs ml-4">
            <span className=" text-gray-500 leading-5">영업시간 </span> |{" "}
            {item.sdOpenTime} - {item.sdCloseTime}
            <br />
            <span className=" text-gray-500 leading-5">전화번호 </span>|{" "}
            {item.sdPhone}
            (요기요 제공 번호)
            <br />
            <span className=" text-gray-500 leading-5"> 주소 </span>|{" "}
            {item.sdAddress}
          </p>
        </div>
      </div>
      <div className=" bg-white  border-gray-200 p-2">
        <div className="py-3  ">
          <img
            src="/photo/store.PNG"
            className=" scale-75 "
            alt="업체정보"
          ></img>
          <p className="text-xs ml-4">
            <span className=" text-gray-500 leading-5">상호명 </span> |{" "}
            {item.sdBusinessName}
            <br />
            <span className=" text-gray-500 leading-5">
              사업자등록번호{" "}
            </span> | {item.sdBusinessNum}
            <br />
            <span className=" text-gray-500 leading-5">
              원산지 정보{" "}
            </span> | {item.sdOriginInfo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
