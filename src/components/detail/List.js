import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import requests from "../../api/request";
import instance from "../../api/axios";
import axios from "axios";
const List = (props) => {
  // const [ListPage, setListPage] = useState(1);
  // const [ListPageInfo, setListPageInfo] = useState({});
  // 가게 메뉴 데이터 가져오기
  // 외부 서버 데이터 연동
  // useEffec 를 이용해서 최초에 데이터를 가지고 온다.
  const [storeList, setStoreList] = useState([]);
  const fetchData = async () => {
    try {
      const storeData = await axios.get(
        "http://192.168.0.156:9988/store/list?cate=" + props.cate
      );
      // console.log(props.item);
      // console.log(storeData.data.list);
      setStoreList(storeData.data.list);
    } catch (err) {
      console.log("가게의 메뉴 목록 리스트 호출호출시 서버 죽음");
      const storeData = {
        keyword: "한식",
        list: [
          {
            scSeq: 7,
            scCiSeq: 5,
            storeInfo: {
              siSeq: 6,
              siName: "현풍닭칼국수-대구점",
              siMinDeliveryTime: "35분",
              siMaxDeliveryTime: "45분",
              siMainImg: "http://192.168.0.156:9988/store/image/현풍닭",
              siStatus: 0,
              siOrderCnt: 120,
              siUiSeq: 27,
              siSdSeq: 12,
              siAtSeq: null,
              deliveryInfo: [
                {
                  dfiSeq: 6,
                  dfiMinFee: 14000,
                  dfiMaxFee: null,
                  dfiDeliveryFee: 2000,
                  dfiSiSeq: 6,
                },
              ],
              discountInfo: [
                {
                  diSeq: 5,
                  diMinPrice: 18000,
                  diDiscount: 1000,
                  diSiSeq: 6,
                },
              ],
            },
          },
          {
            scSeq: 8,
            scCiSeq: 5,
            storeInfo: {
              siSeq: 8,
              siName: "개정-대백점",
              siMinDeliveryTime: "45분",
              siMaxDeliveryTime: "55분",
              siMainImg: "http://192.168.0.156:9988/store/image/개정",
              siStatus: 0,
              siOrderCnt: 93,
              siUiSeq: 25,
              siSdSeq: 14,
              siAtSeq: null,
              deliveryInfo: [
                {
                  dfiSeq: 8,
                  dfiMinFee: 10000,
                  dfiMaxFee: null,
                  dfiDeliveryFee: 2500,
                  dfiSiSeq: 8,
                },
              ],
              discountInfo: [
                {
                  diSeq: 4,
                  diMinPrice: 27000,
                  diDiscount: 3000,
                  diSiSeq: 8,
                },
                {
                  diSeq: 6,
                  diMinPrice: 20000,
                  diDiscount: 1000,
                  diSiSeq: 8,
                },
              ],
            },
          },
          {
            scSeq: 11,
            scCiSeq: 5,
            storeInfo: {
              siSeq: 12,
              siName: "동궁찜닭",
              siMinDeliveryTime: "45분",
              siMaxDeliveryTime: "55분",
              siMainImg: "http://192.168.0.156:9988/store/image/동궁찜닭",
              siStatus: 0,
              siOrderCnt: 171,
              siUiSeq: 28,
              siSdSeq: 19,
              siAtSeq: null,
              deliveryInfo: [
                {
                  dfiSeq: 12,
                  dfiMinFee: 20000,
                  dfiMaxFee: null,
                  dfiDeliveryFee: 2500,
                  dfiSiSeq: 12,
                },
              ],
              discountInfo: [
                {
                  diSeq: 8,
                  diMinPrice: 20000,
                  diDiscount: 1000,
                  diSiSeq: 12,
                },
              ],
            },
          },
          {
            scSeq: 19,
            scCiSeq: 5,
            storeInfo: {
              siSeq: 13,
              siName: "제육대가-대명점",
              siMinDeliveryTime: "35분",
              siMaxDeliveryTime: "45분",
              siMainImg: "http://192.168.0.156:9988/store/image/제육대가",
              siStatus: 0,
              siOrderCnt: 271,
              siUiSeq: 29,
              siSdSeq: 20,
              siAtSeq: null,
              deliveryInfo: [
                {
                  dfiSeq: 13,
                  dfiMinFee: 14000,
                  dfiMaxFee: null,
                  dfiDeliveryFee: 2500,
                  dfiSiSeq: 13,
                },
              ],
              discountInfo: [
                {
                  diSeq: 9,
                  diMinPrice: 15000,
                  diDiscount: 2000,
                  diSiSeq: 13,
                },
              ],
            },
          },
        ],
      };
      setStoreList(storeData.list);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul className="flex flex-col justify-between w-full my-auto">
        {storeList.map((item, idx) => {
          return <ListItem item={item} key={idx} />;
        })}
      </ul>
      <div>
        {/* <span>{data}</span> */}
        {/* <ul className="list-group list-group-flush">{data ? data : ""}</ul>
        {data ? (
          <Pagination
            activePage={ListPage}
            itemsCountPerPage={ListPageInfo.size}
            totalItemsCount={parseInt(ListPageInfo.totalCount)}
            pageRangeDisplayed={10}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
};

export default List;
