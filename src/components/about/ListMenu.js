import axios from "axios";
import React, { useEffect, useState } from "react";
import ListMenuMenu from "./ListMenuMenu";
import ListReview from "./ListReview";
import StoreInfo from "./StoreInfo";
import Order from "./Order";
import ListItem from "../detail/ListItem";

const ListMenu = (props) => {
  console.log("가게정보 : ", props.storeInfo);
  const storeInfo = props.storeInfo.storeInfo;

  // 0은 List 메뉴
  // 1은 상세메뉴
  // 2는 정보메뉴
  const [showType, setShowType] = useState(0);
  const [storeList, setStoreList] = useState([]);
  // 외부 서버 데이터 연동
  // useEffec 를 이용해서 최초에 데이터를 가지고 온다.
  const [storeMenuList, setStoreMenuList] = useState([]);
  const fetchData = async () => {
    try {
      const storeMenuData = await axios.get(
        `http://192.168.0.156:9988/menu/list?storeNo=${props.siSeq}`
      );
      // console.log(props.item);
      // console.log(storeMenuData.data.list);
      setStoreMenuList(storeMenuData.data.list);
    } catch (err) {
      console.log("가게의 메뉴 목록 리스트 호출호출시 서버 죽음");
      const optionData = {
        list: [
          {
            miSeq: 7,
            miName: "크크크치킨",
            miAdditionalEx:
              "크럼블을 입혀! 크런치하고! 크리스피하다! 바삭 끝판왕 크크크치킨에 2가지 디핑소스 새콤한 크크크소스 & 달콤한 콘크림소스를 찍어 먹으면 바삭해서 ㅋㅋㅋ 맛있어서 ㅋㅋㅋ",
            miPrice: 21900,
            miImg: "크크크치킨.jpg",
            miSiSeq: 2,
          },
          {
            miSeq: 10,
            miName: "윙봉24세트",
            miAdditionalEx: "맛있는 윙과 봉만 모았다!인기 메뉴 윙봉세트!",
            miPrice: 20500,
            miImg: "윙봉24세트.jpg",
            miSiSeq: 2,
          },
          {
            miSeq: 11,
            miName: "순살 크크크치킨",
            miAdditionalEx:
              "크럼블을 입혀! 크런치하고! 크리스피하다! 바삭 끝판왕 크크크치킨에 2가지 디핑소스 새콤한 크크크소스 & 달콤한 콘크림소스를 찍어 먹으면 바삭해서 ㅋㅋㅋ 맛있어서 ㅋㅋㅋ",
            miPrice: 22900,
            miImg: "순살크크크치킨.jpg",
            miSiSeq: 2,
          },
        ],
      };
      setStoreMenuList(optionData.list);
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
              className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:opacity-80 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            >
              정 보
            </button>
          </div>
        </div>

        {/* 서버에서 가지고 온 목록을 출력한다. */}
        {storeMenuList.map((item, index) => (
          <div key={index}>
            <div>
              {showType === 0 && <ListMenuMenu item={item} />}
              {showType === 1 && <ListReview />}
              {showType === 2 && <StoreInfo />}
            </div>
          </div>
        ))}
      </div>

      <Order />
    </div>
  );
};

export default ListMenu;
