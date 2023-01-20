import React, { useState, useEffect } from "react";

const Popup = ({ setOpen }) => {
  useEffect(() => {
    console.log("팝업이 생성");

    // 클린함수(컴포넌트가 사라질때 마지막 실행함수)
    return () => {
      console.log("팝업이 제거 됨");
    };
  }, []);

  return (
    <div>
      <div className="popup">
        <h1>Popup</h1>
        <span
          className="close"
          onClick={() => {
            setOpen(false);
          }}
        >
          닫기
        </span>
      </div>
    </div>
  );
};

export default Popup;
