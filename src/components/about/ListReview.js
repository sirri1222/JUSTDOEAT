import React from "react";
import ReviewItem from "./ReviewItem";

const ListReview = ({item}) => {
  return (
    <div className="w-l" style={{ margin: "0 auto" }}>
      <ul className="block rounded-lg shadow-lg  bg-white">
        {item.map(
          review=> <ReviewItem review={review} />
        )}
        {/* <ReviewItem item={item} /> */}
      </ul>
    </div>
  );
};

export default ListReview;
