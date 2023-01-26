import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../components/_action/User_action";
import Logo from "../components/Logo.js";
import instance from "../api/axios";
import request from "../api/request";

const Login = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [uerInfo, setUserInfo] = useState({
    Id: "",
    pwd: "",
  });
  const IdHandler = (event) => setId(event.target.value);

  const pwdHandler = (event) => setPwd(event.target.value);
  const onSubmitHandler = (event) => {
    // 로그인 처리

    event.preventDefault();
    if (!id) {
      alert("이메일 형식이 잘못되었습니다.");
    }
    if (!pwd) {
      alert("비밀번호 형식이 잘못되었습니다.");
    }

    instance
      .post("http://192.168.0.156:9988/member/login", { id, pwd })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(loginSuccess);

    // 버튼만 누르면 리로드 되는것을 막아줌

    // const tempUser = firebase.auth();
    // tempUser
    //   .signInWithIdAndPassword(Id, pwd)
    //   .then((userCredential) => {
    //     // 로그인 성공
    //     const user = userCredential.user;
    //     console.log(user);
    //     navigate("/home");
    //     // Redux 를 이용한 App 의 store 관리 시작
    //     // component 의 state 로 관리하기는 복잡하다.
    //   })
    //   .catch((error) => {
    //     // 로그인 실패
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // console.log(errorCode, errorMessage);
    //     if (errorCode === "auth/wrong-password") {
    //       setErrMsg("비밀번호를 확인하세요.");
    //     } else if (errorCode === "auth/user-not-found") {
    //       setErrMsg("이메일을 확인하세요.");
    //     } else {
    //       setErrMsg("로그인에 실패하였습니다.");
    //     }
    //   });
    // console.log('Id', Id);
    // console.log('Password', Password);

    // let body = {
    //     Id: Id,
    //     pwd: pwd,
    // }

    // dispatch(loginUser(body));
  };

  return (
    <div className=" block p-6 rounded-lg shadow-lg bg-white max-w-2xl mx-auto">
      <section className=" h-screen">
        <div className="px-3 mx-auto text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap g-6">
            <div>
              <Logo></Logo>
              <form onSubmit={onSubmitHandler}>
                {/* <!-- Id input --> */}
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="이메일"
                    value={id}
                    onChange={IdHandler}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="비밀번호"
                    value={pwd}
                    onChange={pwdHandler}
                  />
                </div>

                <div class="flex justify-around items-center mb-6">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="exampleCheck2"
                    >
                      아이디 기억하기
                    </label>
                  </div>
                </div>

                <div class="text-center relative ">
                  <button
                    onClick={(e) => {
                      onSubmitHandler(e);
                    }}
                    className="inline-block w-full py-3 mb-12 bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    로그인
                  </button>
                  {/* <p class="text-sm font-semibold  mt-2 pt-1 mb-0">
                    아직 계정이 없으신가요?
                    <Link
                      to="/signup"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                     회원가입 go!
                    </Link>
                  </p> */}
                </div>

                <div className=" border-t-2">
                  <p className="my-11 text-center">
                    SNS 계정으로 간편하게 로그인 하세요.
                  </p>
                  <button
                    type="button"
                    class="inline-block w-full py-3 my-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    네이버 아이디로 로그인
                  </button>
                  <button
                    type="button"
                    class="inline-block w-full py-3 bg-yellow-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    카카오 아이디로 로그인
                  </button>
                </div>
                <div className="devide-y-1 my-10 text-center">
                  {" "}
                  <Link to="/signup">회원가입</Link> |{" "}
                  <Link to="/idpwdfind">아이디/비밀번호 찿기</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
