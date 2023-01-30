import React from "react";
import { useState } from "react";

const Payment = () => {
  // 추후 각 항목별로 useState 를 만들어야 함.
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderRequest, setOrderRequest] = useState("");
  const [Coupon, setCoupon] = useState("");

  const [val, setVal] = useState("");

  const addressHandler = (e) =>setAddress(e.target.value);
  const detailAddressHandler = (e) =>setDetailAddress(e.target.value);
  const phoneNumberHandler = (e) =>setPhoneNumber(e.target.value);
  const orderRequestHandler = (e) =>setOrderRequest(e.target.value);
  const CouponHandler = (e) =>setCoupon(e.target.value);
  
  return (
    <div>
      {" "}
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-2xl mx-auto">
        <form>
          <div className="block p-2 bg-gray-200 max-w-2xl mx-auto">
            {" "}
            <p className="bg-gray-200">배달정보</p>
          </div>

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
              value={address}
              onChange={addressHandler}
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
              value={detailAddress}
              onChange={detailAddressHandler}
            />
          </div>
          <label>전화번호</label>
          <div className="form-group mb-6">
            <input
              type="number"
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
              placeholder="휴대폰 번호를 입력하세요."
              value={phoneNumber}
              onChange={phoneNumberHandler}
            />
          </div>

          <div className="form-group mb-6">
            <div className="block p-2 bg-gray-200 max-w-2xl mx-auto">
              <label>주문시 요청사항</label>
            </div>

            <input
             
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
              value={orderRequest}
              onChange={orderRequestHandler}
            />
          </div>

          <div className="form-group mb-6">
            <div className="block p-2 bg-gray-200 max-w-2xl mx-auto">
              <label>결제수단 선택</label>
            </div>
            <div className="mb-3">
              <select
                className="form-select 
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
  focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                value={val}
                onClick={() => {}}
              >
                <option value={val} onClick={() => {}}>
                  결제 수단선택
                </option>
                <option value="3" onClick={() => {}}>
                  현장결제
                </option>
                <option value="1" onClick={() => {}}>
                  신용카드
                </option>
                <option value="2" onClick={() => {}}>
                  휴대전화
                </option>
                <option value="3" onClick={() => {}}>
                  네이버페이
                </option>
                <option value="3" onClick={() => {}}>
                  삼성페이
                </option>
              </select>
            </div>
            <div>
              <div className="flex w-full items-center justify-around">
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
              <div className="flex my-5 w-full items-center justify-around">
                <button
                  type="button"
                  className="inline-block px-11 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  신용카드
                </button>
                <button
                  type="button"
                  className="inline-block px-11 py-2.5  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  현장결제
                </button>
              </div>
            </div>
          </div>

          <div className="block p-2 bg-gray-200 max-w-2xl mx-auto">
            {" "}
            <p className="bg-gray-200">결제예정금액</p>
          </div>

          <p>총 주문금액</p>
          <p>배달팁</p>

          <div className="form-group mb-6">
           
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
              value={Coupon}
              onChange={CouponHandler}
            />
          </div>
          <div className="form-group form-check text-center mb-6">
            <input
              type="checkbox"
              classNameName="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck25"
              checked
              value={val}
              onChange={() => {}}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="exampleCheck25"
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
           <span>29000원</span> 결제하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
