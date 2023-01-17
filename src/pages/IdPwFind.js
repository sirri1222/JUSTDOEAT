import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const IdPwFind = () => {
  return (
    <div>
       <section className="h-screen">
    <div className="px-3 mx-auto text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap g-6">
        
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <Logo></Logo>
        <form className="mx-auto">
          <div className="form-group mb-6">
            <label
              for="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              ID 찾기
            </label>
            <input
              type="email"
              className="form-control
        block
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
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="전화번호 입력(-제외)"
            />
            <small
              id="emailHelp"
              className="block mt-1 text-xs text-gray-600"
            ></small>
          </div>
          <div className="flex form-group mb-6">
            <label
              for="exampleInputPassword1"
              className="form-label inline-block mb-2 text-gray-700"
            ></label>
            <input
              type="password"
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
              id="exampleInputPassword1"
              placeholder="인증번호를 입력하세요."
            />
           <button className="">인증번호 받기</button>
          </div>

          <div className="form-group mb-6">
            <label
              for="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              PW 찾기
            </label>
            <input
              type="email"
              className="form-control
        block
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
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="이메일을 입력하세요"
            />
            <small
              id="emailHelp"
              className="block mt-1 text-xs text-gray-600"
            ></small>
              
          </div>
      
          <div>
          <button type="submit" className="
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
      ease-in-out">ID찾기</button>
      <Link to="/password"> <button type="submit" className="
       mt-5
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
      ease-in-out">PW찾기</button></Link>
          </div>
        </form>
      </div>
      </div>
      </div>
      </section>
      </div>
   
  );
};

export default IdPwFind;
