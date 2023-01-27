import React from "react";
import { useState } from "react";
import DetailNav from "../components/detail/DetailNav";
import List from "../components/detail/List";

const Detail = () => {
  const [siSeq, setSeq] = useState(0);
  return (
    <div>
      <DetailNav />
      <div>
        <List siSeq={siSeq} />
      </div>
    </div>
  );
};

export default Detail;
