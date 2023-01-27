import React from "react";

const WellOrder = () => {
  return (
    <div>
      <div className="flex">
        <div className="mb-1 ml-20">
          <select
            className="form-select 
     
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="0">기본 정렬순</option>
            <option value="1">거리순</option>
            <option value="2">별점순</option>
            <option value="3">리뷰 많은순</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default WellOrder;
