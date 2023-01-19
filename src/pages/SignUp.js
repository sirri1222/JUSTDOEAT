import React from "react";
import Logo from "../components/Logo";
const Signup = () => {
  return (
    <div className=" block p-6 rounded-lg shadow-lg bg-white max-w-2xl mx-auto">
      <section className="h-screen">
        <div className="px-3 mx-auto text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center g-6">
            <div className="">
              <Logo></Logo>
              <form>
                <div className=" grid gap-4">
                  <div className="form-group mb-6">
                    <input
                      type="text"
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
                      id="exampleInput123"
                      aria-describedby="emailHelp123"
                      placeholder="이름"
                    />
                  </div>
                  <div className="relative form-group mb-6 ">
                    <button className="absolute top-1 right-2 px-3 py-2 text-xs font-medium text-center text-black bg-gray-200 itborder border-gray-300 rounded-lg hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      인증번호 받기
                    </button>
                    <input
                      type="text"
                      className=" form-control
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
                      id="exampleInput124"
                      aria-describedby="emailHelp124"
                      placeholder="전화번호"
                    />
                  </div>
                </div>

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
                    placeholder="이메일"
                  />
                </div>
                <div className="form-group mb-6">
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
                    id="exampleInput126"
                    placeholder="비밀번호"
                  />
                </div>
                <div className="form-group mb-6">
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
                    id="exampleInput126"
                    placeholder="비밀번호 확인"
                  />
                </div>
                <div className="form-group form-check text-center mb-6">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck25"
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="exampleCheck25"
                  >
                    개인정보 수집에 동의합니다
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
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Signup;
