import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const order = () => {
    const onRemove = () => {
        if (window.confirm("주문 메뉴를 모두 삭제하시겠습니까?")) {
          alert("삭제되었습니다.");
        } else {
          alert("취소합니다.");
        }
      };
    //   useEffect(() => {}, [showType]);

  return ( <div className=" w-2/6 pt-6 rounded-md">
  <div className="block rounded-lg shadow-lg bg-white text-white max-w-sm text-center">
    <div className=" flex justify-between bg-red-500 ">
      <p className="p-3  py-2.5 "> 주문표 </p>

      <button onClick={onRemove}>
        <img
          src="photo/휴지통.png"
          className="scale-50 "
          alt="제품사진"
        ></img>
      </button>
    </div>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">
        주문표에 담긴 메뉴가 없습니다.
      </h5>

      <div className="py-3 px-6 border-t flex justify-between border-gray-300 text-gray-600">
        배달요금 <span>3,000원</span>
      </div>
      <div className="py-3 px-6 border-t border-b flex justify-between border-gray-300 text-gray-600">
        총 합계 <span>21,200원</span>
      </div>
    </div>
    HTML
    <Link to="/shoppingbag">
      <button
        type="button"
        className=" w-full inline-block px-6 py-2.5
         bg-red-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md
          hover:bg-red-700 hover:shadow-lg
           focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
         active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        장바구니로 이동하기
      </button>
    </Link>
  </div>
</div>
  )
}

export default order