import React from "react";
import { Link } from "react-router-dom";

const Member = () => {
  return (
    <div className="p-5 m-10">
        {/* 프엔 */}
      <p className="text-3xl font-extrabold text-center mb-10">FRONTEND</p>
      <div className="flex justify-center gap-10 pb-10 text-center ">
        <div className="">
          <img className="max-h-40"
            src="/photo/손현지.png"
            alt="손현지"
          ></img>
          <div className="mt-10">
            <h5 className="font-extrabold text-lg mb-3">팀장 손현지</h5>
          </div>
          <ul className="fo">
            <li className="">
              헤더 및 로그인,
              <br/>회원가입, <br />아이디/비번 찾기 페이지
            </li>
          </ul>
        </div>

        <div className="">
          <img className="max-h-40"
            src="/photo/김주영.png"
            alt="김주영"
          ></img>
          <div className="mt-10">
            <h5 className="font-extrabold text-lg mb-3">팀원 김주영</h5>
          </div>
          <ul className="">
            <li className="">전체적인 ui 및<br/>리스트 페이지</li>
          </ul>
          
        </div>

        <div className="">
          <img className="max-h-40"
          src="/photo/하경미.png" 
          alt="하경미">  
          </img>
          <div className="mt-10">
            <h5 className="font-extrabold text-lg mb-3">팀원 하경미</h5>
          </div>
          <ul className="">
            <li className="text-">메뉴,리뷰,가게정보<br/>장바구니</li>
          </ul>
         
        </div>
      </div>

      {/* 백엔드 */}
      <p className="text-3xl font-extrabold text-center  mb-10">BACKEND</p>
      <div className="flex justify-center gap-10 pb-20 text-center  ">
        <div className="">
          <img className="max-h-40  rounded-full border"
            src="/photo/김한수.png"
            alt="김한수"
          ></img>
          <div className="mt-10 ">
            <h5 className="font-extrabold text-lg mb-3">팀장 김한수</h5>
          </div>
          <ul className="fo">
            <li className="">
              회원 데이터
            </li>
          </ul>
        </div>

        <div className="">
          <img className="max-h-40 rounded-full border"
            src="/photo/이태훈.png"
            alt="이태훈"
          ></img>
          <div className="mt-10">
            <h5 className="font-extrabold text-lg mb-3">팀원 이태훈</h5>
          </div>
          <ul className="">
            <li className="">메뉴</li>
          </ul>
          
        </div>

        <div className="">
          <img className="max-h-40  rounded-full border"
          src="/photo/김동현.png" 
          alt="김동현">  
          </img>
          <div className="mt-10">
            <h5 className="font-extrabold text-lg mb-3">팀원 김동현</h5>
          </div>
          <ul className="">
            <li className="text-">가게 정보</li>
          </ul>
         
        </div>
        <div className="">
          <img className="max-h-40  rounded-full border"
          src="/photo/김성민.png" 
          alt="김성민">  
          </img>
          <div className="mt-10">
            <h5 className="font-extrabold text-lg mb-3">팀원 김성민</h5>
          </div>
          <ul className="">
            <li className="text-">리뷰</li>
          </ul>
         <Link to="/home"><button className="bg-red-600 absolute rounded px-3 right-8">home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Member;
