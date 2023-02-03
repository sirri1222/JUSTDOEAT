import React from "react";

import Logo from "../components/util/Logo";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import instance from "../api/axios";

const IdPwFind = () => {
 
  const [uiEmail, setuiEmail] = useState("");
  const [uiId, setUiid] = useState("");
  const [uiName, setUiName] = useState("");
  // 이메일 유효성 검사
  const isValidEmail = uiEmail.includes("@") && uiEmail.includes(".");
  const emailHandler = (event) => {
    setuiEmail(event.target.value);

    if (!isValidEmail) {
      setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ");
    } else {
      setEmailMessage("올바른 이메일 형식이에요 : )");
    }
  };
  const IdHandler = (event) => {
    setUiid(event.target.value);
  };
  const NameHandler = (event) => {
    setUiName(event.target.value);
  };

  //오류메시지 상태저장
  const [emailMessage, setEmailMessage] = useState("");
  const IdSubmitClick = (e) => {
    e.preventDefault();

    instance
      .put("http://192.168.0.156:9988/member/findid", { uiEmail, uiName })
      .then((res) => {
        console.log("성공", res);
        if ((res.status = "200")) {
          return alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.status !== 200) {
          return alert(err.data.msg);
        }
      });
  };
  const PwSubmitClick = (e) => {
    e.preventDefault();
    instance
      .put("http://192.168.0.156:9988/member/findpw", { uiId, uiEmail, uiName })
      .then((res) => {
        console.log("성공", res);
        if ((res.status = "200")) {
          return alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.status !== 200) {
          return alert(err.response.data.msg);
        }
      });
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
                  <div className="flex form-group mb-6 relative"></div>

                  <div className="form-group mb-6">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                      ID / PW 찾기
                    </label>
                    <span className="mx-3 opacity-70 text-xs text-red-500">
                      아이디는 pw찾을 때만 입력해 주세요.
                    </span>
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
        my-5
        focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="아이디를 입력하세요."
                      value={uiId}
                      onChange={IdHandler}
                    />
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
        my-5
        focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="이름을 입력하세요"
                      onChange={NameHandler}
                      value={uiName}
                    />
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
        my-5
        focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="이메일을 입력하세요"
                      onChange={emailHandler}
                      value={uiEmail}
                    />
                    {uiEmail.length > 0 && (
                      <span className="text-red-500 opacity-80 font-semibold text-xs">
                        {emailMessage}
                      </span>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={IdSubmitClick}
                      type="submit"
                      className="
      w-full
      px-6
      py-2.5
      bg-red-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-red-700 hover:shadow-lg
      focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-gray-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                    >
                      ID찾기
                    </button>{" "}
                    <button
                      onClick={PwSubmitClick}
                      type="submit"
                      className="
       mt-5
      w-full
      px-6
      py-2.5
      bg-red-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-red-700 hover:shadow-lg
      focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-gray-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                    >
                      PW찾기
                    </button>
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
