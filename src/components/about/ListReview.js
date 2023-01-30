import React from "react";
import Pagination from "../Pagination";
import ReviewItem from "./ReviewItem";

const ListReview = (props) => {
  return (
    <div className="w-l" style={{ margin: "0 auto" }}>
      <ul className="block rounded-lg shadow-lg  bg-white">
      <ReviewItem/>
      </ul>
     
    </div>
  );
};

export default ListReview;
