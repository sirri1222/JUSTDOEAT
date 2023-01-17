import React from "react";

const ListReview = () => {
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
      <ul className="block rounded-lg shadow-lg bg-white">
        <li className="py-3 px-6 bg-gray-100 border-b border-gray-300">real***님</li>
        <li className="flex justify-between np-6 ">
          <p className="text-gray-700 text-sm ml-4 p-1 mb-1 justify-content: center">
            ★★★★★|맛 ★ 5 양 ★ 5 배달 ★ 1
          </p>
        </li>
        <li>
          <img
            src="photo/revw.jpg"
            className="w-full" 
          ></img>
        </li>
        <div class="mb-4"><li className="py-3 px-6 border-t border-gray-300 text-gray-600">
          배달 최악. 1시간 넘어서 다 식어서 옴. 가게가 문제인지 배달이 문제인지
          찾아서 고소하고 싶을정도. 얼마나 차게 식었는지 내가 배달온걸
          전자렌지를 돌려먹었다. 이 뭔
        </li></div>
        
      </ul>
      
    </div>
  );
};

export default ListReview;
