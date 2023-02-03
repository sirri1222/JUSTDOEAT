import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import axios from "axios";
import { useSelector } from "react-redux";

const List = (props) => {
  const cateGory = useSelector((state) => {
    return state.cate.cate;
  });

  const [storeList, setStoreList] = useState([]);
  const fetchData = async () => {
    try {
      const storeData = await axios.get(
        "http://192.168.0.156:9988/store/list?cate=" + cateGory
      );

      setStoreList(storeData.data.list);
    } catch (err) {
      console.log("가게의 메뉴 목록 리스트 호출호출시 서버 죽음");
    }
  };
  useEffect(() => {
    fetchData();
  }, [cateGory]);

  console.log(storeList);

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
