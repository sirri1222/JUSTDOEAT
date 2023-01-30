import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailNav from "../components/detail/DetailNav";
import List from "../components/detail/List";

const Detail = () => {
  let { cate } = useParams();
  return (
    <div>
      <DetailNav />
      <div>
        {/* 한식, 일식 등의 글자가 전달 된다. */}
        <List cate={cate} />
      </div>
    </div>
  );
};

export default Detail;
