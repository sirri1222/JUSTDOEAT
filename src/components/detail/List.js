import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import requests from "../../api/request";
import instance from "../../api/axios";
const List = (props) => {
  // 가게 메뉴 데이터 패치 하여 관리 함.
  const [data, setData] = useState([]);

  // const [ListPage, setListPage] = useState(1);
  // const [ListPageInfo, setListPageInfo] = useState({});

  // 가게 메뉴 데이터 가져오기
  const fetchData = async () => {
    try {
    } catch (err) {}

    const params = {
      page: props.siSeq,
    };

    // 메뉴 목록
    const list = await instance.get(requests.fetchDetail, { params });
    setData(list.data.list);
    // console.log("메뉴 목록", list.data.list);
    // console.log("dataShow", list.data.list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul className="flex flex-col justify-between w-full my-auto">
        {data.map((item, idx) => {
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
