import React from 'react'

const ReviewItem = ({item}) => {
  return (
    <div>


<li className="py-3 px-3 bg-gray-100 border-b border-gray-500">
          real***님 <span className='text-sm text-gray-400'>2023년 1월 6일</span>
        </li>
        <li className="flex justify-between np-6 ">
          <p className="text-gray-700 text-sm ml-4 p-1 mb-1 justify-content: center">
            맛★★★★★ |양★ 5 |배달★★
          </p>
        </li>
        <div className="flex p-2 justify-between border-t border-gray-300 text-gray-600">
          <li>
            <img src="photo/revw.jpg" className="" alt="리뷰사진"></img>
          </li>
          <li className="px-3">
            {/* {item.riContent} */}
            배달 최악. 1시간 넘어서 다 식어서 옴. 가게가 문제인지 배달이
            문제인지 찾아서 고소하고 싶을정도. 얼마나 차게 식었는지 내가
            배달온걸 전자렌지를 돌려먹었다. 이 뭔
          </li>
        </div>

    </div>
  )
}

export default ReviewItem