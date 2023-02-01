import axios from "axios";
import React, { useEffect, useState } from "react";
import ListMenuMenu from "./ListMenuMenu";
import ListReview from "./ListReview";
import StoreInfo from "./StoreInfo";
import Order from "./Order";
import ListItem from "../detail/ListItem";

const ListMenu = (props) => {
  // console.log("가게정보 : ", props.storeInfo);
  const storeInfo = props.storeInfo.storeInfo;
  // 0은 List 메뉴
  // 1은 상세메뉴
  // 2는 정보메뉴
  const [showType, setShowType] = useState(0);
  const [storeList, setStoreList] = useState([]);
  // 외부 서버 데이터 연동
  // 가게 메뉴에 대한 정보.
  const [storeMenuList, setStoreMenuList] = useState([]);
  // 가게 리뷰에 대한 정보.
  const [storeReviewList, setStoreReviewList] = useState([]);
  // 가게 상세 정보.
  const [storeInfromation, setStoreInfromation] = useState([]);
  const fetchData = async () => {
    try {
      const storeMenuData = await axios.get(
        `http://192.168.0.156:9988/menu/list?storeNo=${props.siSeq}`
      );
      // console.log("가게 메뉴", storeMenuData);
      setStoreMenuList(storeMenuData.data.list);
      // 가게 리뷰에 대한 정보.
      const storeReviewData = await axios.get(
        `http://192.168.0.156:9988/review/list?storeNo=${props.siSeq}`
      );
      console.log("가게 리뷰", storeReviewData);
      setStoreReviewList(storeReviewData.data.list);
      // 가게 상세 정보.
      const storeInformationData = await axios.get(
        `http://192.168.0.156:9988/store/detail?storeNo=${props.siSeq}`
      );
      console.log("가게 상세", storeInformationData);
      setStoreInfromation(storeInformationData.data.list);
    } catch (err) {
      // console.log("가게의 메뉴 목록 리스트 호출호출시 서버 죽음");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="flex justify-between w-5/6 pt-6"
      style={{ margin: "0 auto" }}
    >
      <div className="w-4/6 m-5">
        <div className="flex justify-between h-40 shadow-md">
          {storeList.map((item, idx) => {
            return <ListItem item={item} key={idx} />;
          })}
          <img
            src={`${storeInfo.siMainImg}`}
            className="scale-75 ..."
            alt="이미지"
          ></img>
          <div className="flex justify-center  flex-col py-4 w-3/4 ml-5 ">
            <div className="flex justify-center flex-col ">
              <span>★★★★☆4.8</span>
              <span>최소주문금액 {storeInfo.siMinPrice}원</span>
              <span>결제 신용카드, 현금,JPay</span>
              <span>
                배달시간 {storeInfo.siMinDeliveryTime}~
                {storeInfo.siMaxDeliveryTime}{" "}
              </span>
            </div>
          </div>
        </div>

        {/* 가게 메뉴 리뷰 정보 */}
        <div>
          <div className="flex justify-around m-5">
            <button
              onClick={() => setShowType(0)}
              type="button"
              className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:opacity-80  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            >
              메 뉴
            </button>
            <button
              onClick={() => setShowType(1)}
              type="button"
              className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:opacity-80  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            >
              리 뷰
            </button>
            <button
              onClick={() => setShowType(2)}
              type="button"
              className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:opacity-80 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            >
              정 보
            </button>
          </div>
        </div>

        {/* 메뉴 선택시 */}
        {showType === 0 &&
          storeMenuList.map((item, index) => (
            <div key={index}>
              <div>
                <ListMenuMenu item={item} />
              </div>
            </div>
          ))}
        {/* 리뷰 선택시 */}
        {showType === 1 &&
          storeReviewList.map((item, index) => (
            <div key={index}>
              <div>
                <ListReview item={storeReviewList} />
              </div>
            </div>
          ))}
        {/* 가게정보 선택시  */}
        {showType === 2 && <StoreInfo item={storeInfromation[0]} />}
      </div>

      <Order />
    </div>
  );
};

export default ListMenu;
