import React from "react";

const ReviewItem = ({ review }) => {
  console.log("가게 리뷰", review);
  return (
    <div>
      <li className="flex  py-3 px-3 bg-gray-100  border-gray-500">
        {review.userInfo.uiName ? review.userInfo.uiName : " " } 님{" "}
        <span className="text-sm ml-3 text-gray-400"> {review.riRegDt ? review.riRegDt: ""} </span>
        <span className="text-sm ml-3 text-gray-400">
          {" "}
          총점 | {review.rspAllScore ? review.rspAllScore: ""}
        </span>
        <ul className="flex mt-0.5 scale-75">
          <li>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              className="w-4 text-yellow-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              className="w-4 text-yellow-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              className="w-4 text-yellow-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="star"
              className="w-4 text-yellow-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="star"
              className="w-4 text-yellow-500"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
              ></path>
            </svg>
          </li>
        </ul>
      </li>

      <li className="flex justify-between np-6 ">
        <p className="text-gray-700 text-sm ml-4 p-1 mb-1 justify-content: center">
          맛 {review.rspTasteScore ? review.rspTasteScore: ""} | 양 {review.rspQuantityScore ? review.rspQuantityScore: ""} | 배달{" "}
          {review.rspDeliveryScore ? review.rspDeliveryScore: ""}
        </p>
      </li>
      <div className="flex p-2  border-t border-gray-300 text-gray-600">
        <li>
          <img
            src={
              review.imageInfo.length >= 1 ? review.imageInfo[0].rimgUri : ""
            }
            width={50}
            className=""
            alt="리뷰사진"
          ></img>
        </li>
        <li className="px-3">
          {review.riContent ? review.riContent: ""}
          {/* 배달 최악. 1시간 넘어서 다 식어서 옴. 가게가 문제인지 배달이
            문제인지 찾아서 고소하고 싶을정도. 얼마나 차게 식었는지 내가
            배달온걸 전자렌지를 돌려먹었다. 이 뭔 */}
        </li>
      </div>
    </div>
  );
};

export default ReviewItem;
