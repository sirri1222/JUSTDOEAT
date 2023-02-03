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
      // console.log("가게 리뷰", storeReviewData);
      setStoreReviewList(storeReviewData.data.list);
      // 가게 상세 정보.
      const storeInformationData = await axios.get(
        `http://192.168.0.156:9988/store/detail?storeNo=${props.siSeq}`
      );
      // console.log("가게 상세", storeInformationData);
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
        <div className="flex justify-between  h-40 shadow-md rounded-3xl">
          {storeList.map((item, idx) => {
            return <ListItem item={item} key={idx} />;
          })}
          <img
            src={`${storeInfo.siMainImg}`}
            className="scale-75 mr-6 shadow-md rounded-3xl"
            alt="이미지"
          ></img>
          <div className="flex justify-center  flex-col py-4 w-3/4 ml-7 ">
            <div className="flex justify-center flex-col ">
              <span className="flex  ">
                총점 4.8
                <ul class="flex  mt-0.5  scale-75">
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      class="w-4 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      class="w-4 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      class="w-4 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="star"
                      class="w-4 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="star"
                      class="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </span>
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
          <div className="flex py-5 justify-around m-5">
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
