import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import Pagination from "react-js-pagination";
import requests from "../../api/request";
import instance from "../../api/axios";
const List = (props) => {
  // 가게 메뉴 데이터 패치 하여 관리 함.
  const [data, setData] = useState([]);

  // const [ListPage, setListPage] = useState(1);
  // const [ListPageInfo, setListPageInfo] = useState({});

  // 가게 메뉴 데이터 가져오기
  const fetchData = async () => {
    const params = {
      page: props.siSeq,
    };

    // 메뉴 목록
    const list = await instance.get(requests.fetchDetail, { params });
    // console.log("메뉴 목록", list.data.list);
    setData(list.data.list);

    // const { content, totalPages, totalCount, size } = list.data.list
    //   ? list.data.list
    //   : {};
    // const StoreList = content ? content : "";
    // const TotalList =
    //   StoreList &&
    //   StoreList.map((item) => {
    //     return <ListItem key={item.seq} ListData={item}></ListItem>;
    //   });
    // const pageInfo = { totalPages, totalCount, size };
    // setData(TotalList);

    // console.log("토탈리스트", TotalList);

    console.log("dataShow", data);
    // setListPageInfo(pageInfo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const [bookList, setBookList] = useState([]);
  // const [listPage, setListPage] = useState(1);
  // const [listPageInfo, setListPageInfo] = useState({});
  // const fetchData = async () => {
  //   const params = {
  //     page: listPage - 1,
  //   };
  //   const resultList = await instance.get(requests.fetchList, { params });
  //   const item = resultList.data.list.content;
  //   const { totalPages, totalElements, size } = resultList.data.list;
  //   setBookList(item);
  //   setListPageInfo({ totalPages, totalElements, size });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [listPage]);
  // const list = bookList.map((item) => {
  //   return <ListItem key={item.seq} bookinfo={item} />;
  // });
  // const handlePageChange = (page) => {
  //   setListPage(page);
  // };

  // const reviewList = content ? content : "";
  // const list =
  // reviewList &&
  // reviewList.map((item) => {
  //   return <ReviewItem key={item.reviewSeq} reviewData={item} />;
  // });
  // 데이터 패치 하기
  // const handlePageChange = (page) => {
  //   setListPage(page);
  // };
  return (
    <div>
      <ul className="flex flex-col justify-between w-full my-auto">
        {data.map((item) => { 
         return <ListItem item={item}/>;
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
