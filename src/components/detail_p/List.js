import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import Pagination from "react-js-pagination";
import requests from "../../api/request";
import instance from "../../api/axios";
const List = (props) => {
  // 데이터 패치 하기
  const [data, setData] = useState([]);
  const [ListPage, setListPage] = useState(1);
  const [ListPageInfo, setListPageInfo] = useState({});
  const fetchData = async () => {
    const params = {
      page: 0,
      page: ListPage - 1,
    };

    console.log("되니");
    const list = await instance.get(requests.fetchDetail, { params });
    // console.log(list.data);
    setData(list.data.list);
    console.log(list.data.list);
    const { content, totalPages, totalCount, size } = list.data.list
      ? list.data.list
      : {};
    const StoreList = content ? content : "";
    const TotalList =
      StoreList &&
      StoreList.map((item) => {
        return <ListItem key={item.seq} ListData={item}></ListItem>;
      });
    const pageInfo = { totalPages, totalCount, size };
    setData(TotalList);

    setListPageInfo(pageInfo);
  };

  useEffect(() => {
    fetchData();
  }, [ListPage]);
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
  const handlePageChange = (page) => {
    setListPage(page);
  };

  return (
    <div>
      <ul className="flex flex-col justify-between w-full my-auto">
        <ListItem />
        {data}
      </ul>
      {/* <div>
        <ul className="list-group list-group-flush">{data ? data : ""}</ul>
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
        )}
      </div> */}
    </div>
  );
};

export default List;
