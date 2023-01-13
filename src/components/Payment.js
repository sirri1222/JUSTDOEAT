import React from 'react'

const Payment = () => {
  return (
    <div>  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
    <form>
      <label>주소</label>
      <div className="form-group mb-6">
        <input
          type="email"
          className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
          id="exampleInput125"
          placeholder="(필수)주소를 입력하세요"
        />
      </div>
      <div className="form-group mb-6">
        <input
          type=""
          className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
          id="exampleInput126"
          placeholder="(필수)상세주소를 입력하세요"
        />
      </div>
      <label>전화번호</label>
      <div className="form-group mb-6">
        <input
          type="(필수)전화번호를 입력하세요."
          className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
          id="exampleInput126"
          placeholder="Password"
        />
      </div>
      
      <div className="form-group mb-6">
        <label>주문시 요청사항</label>
        <input
          type="password"
          className="form-control block
    w-full
    px-3
    py-10
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
          id="exampleInput126"
          placeholder="요청사항을 입력하세요."
        />
      </div>

      <div className="form-group mb-6">
        <label>결제수단 선택</label>

        <div class="mb-3 xl:w-96">
          <select
            class="form-select appearance-none
  block
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
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>결제 수단선택</option>
            <option value="3">현장결제</option>
            <option value="1">신용카드</option>
            <option value="2">휴대전화</option>
            <option value="3">네이버페이</option>
            <option value="3">삼성페이</option>
          
          </select>
        </div>
        <div class="flex justify-center space-x-2">
          <div class="flex w-full items-center justify-center">
            <div class="inline-flex " role="group">
              <button
                type="button"
                className="
    rounded-l
    px-6
    py-2
    border-0
    text-gray-600
    font-medium
    text-xs
    leading-tight
    uppercase
    hover:bg-black hover:bg-opacity-5
    focus:outline-none focus:ring-0
    transition
    duration-150
    ease-in-out
  "
              >
                <img src="/photo/NAVERPAY.PNG" alt="네이버페이"></img>
                네이버 페이
              </button>

              <button
                type="button"
                className="
    rounded-r
  
    px-6
    py-2
    border-0
    text-gray-600
    font-medium
    text-xs
    leading-tight
    uppercase
    hover:bg-black hover:bg-opacity-5
    focus:outline-none focus:ring-0
    transition
    duration-150
    ease-in-out
  "
              >
                <img
                  className="w-30 h-20"
                  src="/photo/SAMSUNGPAY.PNG"
                  alt="삼성페이"
                ></img>
                삼성페이
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <label>할인방법 선택</label>
      <div className="form-group mb-6">
        <input
          type="email"
          className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
          id="exampleInput125"
          placeholder="쿠폰 코드를 입력하세요."
        />
      </div>
      <div className="form-group form-check text-center mb-6">
        <input
          type="checkbox"
          classNameName="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
          id="exampleCheck25"
          checked
        />
        <label
          className="form-check-label inline-block text-gray-800"
          for="exampleCheck25"
        >
          개인정보 수집에 동의합니다.
        </label>
      </div>
      <button
        type="submit"
        className="
  w-full
  px-6
  py-2.5
  bg-gray-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-gray-700 hover:shadow-lg
  focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-gray-800 active:shadow-lg
  transition
  duration-150
  ease-in-out"
      >
        결제하기
      </button>

     
    </form>
  </div></div>
  )
}

export default Payment