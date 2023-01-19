import React from "react";
import Pagination from "../Pagination";
import ReviewItem from "./ReviewItem";

const ListReview = (props) => {

  // const [reviews, setReviews] = useState([]);
  // const [reviewPage, setReviewPage] = useState(1);
  // const [reviewPageInfo, setReviewPageInfo] = useState({});
  // const fetchData = async () => {
  //   const params = {
  //     seq: props.seq,
  //     page: reviewPage - 1,
  //   };
  //   const resultReview = await instance.get(requests.fetchReview, { params });
  //   const { content, totalPages, totalElements, size } = resultReview.data.List
  //     ? resultReview.data.List
  //     : {};
  //   const reviewList = content ? content : "";
  //   const list =
  //     reviewList &&
  //     reviewList.map((item) => {
  //       return <ReviewItem key={item.reviewSeq} reviewData={item} />;
  //     });
  //   const pageInfo = { totalPages, totalElements, size };
  //   setReviews(list);
  //   setReviewPageInfo(pageInfo);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [reviewPage]);
  // const handlePageChange = (page) => {
  //   setReviewPage(page);
  // };
  return (
    // <ul className="p-3 ">
    //   <li className=" h-5 bg-blue-50">real***님</li>
    //   <li className=" h-5 ">★★★★★|맛 ★ 5 양 ★ 5 배달 ★ 1</li>
    //   <li className=" h-15 bg-red-50 overflow-auto">
    //     <img
    //       src="photo/revw.jpg"
    //       className=" bg-white border rounded overflow-auto"
    //     ></img>
    //   </li>
    //   <li className=" h-5 ">
    //     배달 최악. 1시간 넘어서 다 식어서 옴. 가게가 문제인지 배달이 문제인지 //
    //     찾아서 고소하고 싶을정도. 얼마나 차게 식었는지 내가 배달온걸 //
    //     전자렌지를 돌려먹었다. 이 뭔
    //   </li>
    // </ul>
    <div className="w-l" style={{ margin: "0 auto" }}>
      <ul className="block rounded-lg shadow-lg  bg-white">
      <ReviewItem/>
      </ul>
      <Pagination />
    </div>
  );
};

export default ListReview;
