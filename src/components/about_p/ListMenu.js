import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListMenuMenu from "./ListMenuMenu";
import ListReview from "./ListReview";
import StoreInfo from "./StoreInfo";
import Oder from "./Order";

const ListMenu = ({ increaseQ, decreaseQ, cartCountTotal, removeFromCart }) => {
  // 0은 List 메뉴
  // 1은 상세메뉴
  // 2는 정보메뉴
  const [showType, setShowType] = useState(0);

  // 외부 서버 데이터 연동
  // useEffec 를 이용해서 최초에 데이터를 가지고 온다.
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    console.log("데이터 가지고와요.");
    axios
      .get("http://192.168.0.156:9988/menu/list?page=0")
      .then((res) => {
        setMenuList(res.data.list);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className="flex justify-between w-5/6 pt-6"
      style={{ margin: "0 auto" }}
    >
      <div className="w-4/6 m-5">
        <div className="flex justify-between h-40 shadow-md">
          <img
            src="photo/KFC_1.jpg"
            className="scale-75 ..."
            alt="이미지"
          ></img>
          <div className="flex justify-center  flex-col py-4 w-3/4 ml-5 ">
            <div className="flex justify-center flex-col ">
              <span>★★★★☆4.8</span>
              <span>최소주문금액 11,000원</span>
              <span>결제 신용카드, 현금,JPay</span>
              <span>배달시간 40~50분</span>
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
              className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            >
              정 보
            </button>
          </div>
        </div>

        {/* 서버에서 가지고 온 목록을 출력한다. */}
        {menuList.map((item, index) => (
          <div key={index}>
            <div>
              {showType === 0 && <ListMenuMenu item={item} />}
              {showType === 1 && <ListReview />}
              {showType === 2 && <StoreInfo />}
            </div>
          </div>
        ))}
      </div>
      <Oder />
    </div>
  );
};

export default ListMenu;
