import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Layout from "../components/layout/Layout";
const IdPwFind = () => {
  const idFind = () => {
    alert("입력된 번호로 아이디를 전송했습니다.");
  };

  return (
    <Layout>
      <div className=" block p-6 rounded-lg shadow-lg bg-white max-w-2xl mx-auto">
        <section className="h-screen">
          <div className="px-3 mx-auto text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap g-6">
              <div className="">
                <Logo></Logo>
                <form className="mx-auto">
                  <div className="form-group mb-6">
                    <label
                      htmlFor="exampleInputEmail1"
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
                      onChange={() => {}}
                    />
                    <small
                      id="emailHelp"
                      className="block mt-1 text-xs text-gray-600"
                    ></small>
                  </div>
                  <div className="flex form-group mb-6 relative">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label inline-block mb-2 text-gray-700"
                    ></label>
                  </div>

                  <div className="form-group mb-6">
                    <label
                      htmlFor="exampleInputEmail1"
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
                      onChange={() => {}}
                    />
                    <small
                      id="emailHelp"
                      className="block mt-1 text-xs text-gray-600"
                    ></small>
                  </div>

                  <div>
                    <button
                      onClick={idFind}
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
                      ID찾기
                    </button>
                    <Link to="/password">
                      {" "}
                      <button
                        type="submit"
                        className="
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
      ease-in-out"
                      >
                        PW찾기
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IdPwFind;
