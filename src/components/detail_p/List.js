import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";

const list = (props) => {

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
  




return (
    <div>
      <div className="flex flex-col max-w-3xl border-b-2 p-6 mx-auto sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img
              className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
              src="/photo/KFC_1.jpg"
              alt="Polaroid camera"
            />
            <ul className="flex flex-col justify-between w-full my-auto">
            <ListItem/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default list;
