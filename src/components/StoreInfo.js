import React from "react";

const StoreInfo = () => {
  return (
    <div>
      <div className=" bg-white border border-gray-200 p-2">
        <div className=" py-3  ">
          <img src="photo/bell.PNG" className=" scale-75 " alt="사장님 알림"></img>
          <p className="text-xs ml-4">
            * 딜리버리 주문에 따라 발생되는 고객 부담 배달비는 배달 대행사에
            지급됩니다.
            <br />
            * KFC 배달 가격은 매장 가격과 동일합니다.
            <br />
            * 치킨은 다양한 부위로 매장에서 제공되는 점 양해 바랍니다.
            <br />* 배송환경 및 매장상황 등의 사유로 예상 배달시간보다 배달이
            다소 지연될 수 있습니다.
          </p>
        </div>
      </div>
      <div className=" bg-white border border-gray-200 p-2">
        <div className="py-3  ">
          <img src="photo/card.PNG" className=" scale-75 "alt="결제정보"></img>
          <p className="text-xs ml-4">
            <span className=" text-gray-500">최소주문금액</span> | 11,000원
            <br />
            <span className=" text-gray-500">결제수단</span> | 신용카드 , 현금 ,
            요기서결제
          </p>
        </div>
      </div>
      <div className=" bg-white border border-gray-200 p-2">
        <div className="py-3  ">
          <img src="photo/info.PNG" className=" scale-75 " alt="사업자정보"></img>
          <p className="text-xs ml-4">
            <span className=" text-gray-500">영업시간</span> | 11:00 - 23:45
            <br />
            <span className=" text-gray-500">전화번호 </span>| 050712922015
            (요기요 제공 번호)
            <br />
            <span className=" text-gray-500"> 주소 </span>| 대구광역시 중구
            문화동 18-1 덕영빌딩 18-1 덕영빌딩
          </p>
        </div>
      </div>
      <div className=" bg-white border border-gray-200 p-2">
        <div className="py-3  ">
          <img src="photo/store.PNG" className=" scale-75 "alt="업체정보"></img>
          <p className="text-xs ml-4">
            <span className=" text-gray-500">상호명</span> |
            주식회사케이에프씨코리아
            <br />
            <span className=" text-gray-500">사업자등록번호</span> |
            201-81-89723
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
