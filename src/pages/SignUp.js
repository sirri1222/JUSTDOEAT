import React, { useState } from "react";
import instance from "../api/axios";
import Logo from "../components/Logo";
import Layout from "../components/layout/Layout";
const Signup = () => {
  const [uiGen, setUiGender] = useState(1);

  const [uiEmail, setuiEmail] = useState("");
  const [uiPwd, setUiPwd] = useState("");
  const [uiPwdCheck, setUiPwdCheck] = useState("");
  const [uiId, setUiid] = useState("");
  const [uiPhone, setUiPhone] = useState("");
  const [uiName, setUiName] = useState("");
  const [usabledId, setUsableId] = useState("");
  const [uiBirth, setUiBirth] = useState("");

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState(
    "2글자 이상 5글자 미만으로 입력해주세요."
  );
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneNumberMessage, setPhoneNumberMessage] = useState("");
  const [IdMessage, setIdMessage] = useState("");
  const [BirthMessage, setBirthMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const isCheckBoxClicked = () => {
    setUiGender(!uiGen);
  };
  // 이메일 유효성 검사
  const isValidEmail = uiEmail.includes("@") && uiEmail.includes(".");
  // 이메일
  const emailHandler = (event) => {
    setuiEmail(event.target.value);
    if (!isValidEmail) {
      setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ");
    } else {
      setEmailMessage("올바른 이메일 형식이에요 : )");
    }
  };
  //  이름
  const nameHandler = (event) => {
    setUiName(event.target.value);
    if (uiName.length < 1 || uiName.length > 5) {
      setNameMessage();
    } else {
      setNameMessage("올바른 이름 형식입니다 :)");
    }
  };
  // 휴대폰번호 유효성검사
  const autoHyphenregExpPhone =
    /^(?:(010\d{4})|(01[1|6|7|8|9]\d{3,4}))(\d{4})$/;
  // console.log("검사", autoHyphenregExpPhone.test("01012345678"));
  // 휴대폰번호
  const phoneHandler = (event) => {
    let value = event.target.value;
    setUiPhone(value);
    const resultTest = autoHyphenregExpPhone.test(value);
    if (!resultTest) {
      setPhoneNumberMessage(
        "전화번호 형식이 틀렸습니다! -을 제외하고 입력해주세요 ㅜ_ㅜ"
      );
    } else {
      setPhoneNumberMessage("올바른 전화번호 형식입니다 :)");
    }
  };

  //비밀번호 유효성검사
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  // 비밀번호
  const pwHandler = (event) => {
    setUiPwd(event.target.value);

    if (!passwordRegex.test(event.target.value)) {
      setPhoneNumberMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    } else {
      setPhoneNumberMessage("올바른 비밀번호 형식입니다 :)");
    }
  };
  // 비밀번호 확인
  const pwCheckHandler = (event) => {
    setUiPwdCheck(event.target.value);
    if (uiPwd !== uiPwdCheck) {
      setPhoneNumberMessage(
        "비밀번호와 확인이 일치하지 않아요! 다시 확인해주세요 ㅜ ㅜ"
      );
    } else {
      setPhoneNumberMessage("올바른 비밀번호 형식입니다 :)");
    }
  };
  const autoHyphenPhone = uiPhone.replace(
    /^(\d{2,3})(\d{3,4})(\d{4})$/,
    `$1-$2-$3`
  ); // 숫자그룹을 나눠 사이에 하이픈(-)추가
  const autoHyphenBirth = uiBirth.replace(
    /^(\d{4})(\d{2})(\d{2})$/,
    `$1-$2-$3`
  );
  const GenHandler = (event) => {
    setUiGender(uiGen + 1);
  };
  // console.log(uiGen);

  const uiBirthHandler = (event) => setUiBirth(event.target.value);

  const idHandler = (event) => setUiid(event.target.value);
  const onSubmitHandler = (event) => {
    // 로그인 처리

    event.preventDefault();
    // if (uiId === "") {
    //   alert(" 필수 정보를 모두 입력해 주세요.");
    // }
    //  if (uiName === "") {
    //   alert(" 필수 정보를 모두 입력해 주세요.");
    // }
    // if (uiPhone === "") {
    //   alert(" 필수 정보를 모두 입력해 주세요.");
    // }
    // if (uiEmail === "") {
    //   alert(" 필수 정보를 모두 입력해 주세요.");
    // }
    // if (uiBirth === "") {
    //   alert(" 필수 정보를 모두 입력해 주세요.");
    // }
    // if (uiPwd === "") {
    //   alert(" 필수 정보를 모두 입력해 주세요.");
    // }
    if (!autoHyphenBirth) {
      alert(" 생년월일 형식이 잘못되었습니다. ");
    }

    if (!isValidEmail) {
      alert("이메일 형식이 잘못되었습니다.");
    }
    if (uiPwd.length < 6) {
      alert("비밀번호는 6글자 이상 입력해 주세요.");
    }
    if (uiId.length < 5) {
      alert("아이디는 5글자 이상 입력해 주세요.");
    }
    if (uiPwd !== uiPwdCheck) {
      alert("비밀번호 확인이 일치하지 않습니다.");
    } else {
    }

    // 데이터 api
    instance
      .put("http://192.168.0.156:9988/member/join", {
        uiName,
        uiId,
        uiEmail,
        uiPhone,
        uiBirth,
        uiGen,
        uiPwd,
      })
      .then((res) => {
        console.log("성공", res);
      })
      .catch((res) => {
        console.log("실패", res);
      });
  };
  const DuplicationAPI = async (uiId) => {
    let return_value;
    await instance
      .get("http://192.168.0.156:9988/member/list?page=0", {
        uiId,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });

    return return_value;
  };
  const DuplicationCheck = (e) => {
    e.preventDefault();
    DuplicationAPI.then((res) => {
      console.log(res);
      if (res !== uiId) {
        alert("사용 가능한 아이디입니다.");
        setUsableId(res);
      } else {
        alert("중복된 아이디입니다. 다시 시도하세요.");
        setUsableId(res);
        setUiid("");
      }
    });
  };
  // 클린함수(컴포넌트가 사라질때 마지막 실행함수)

  return (
    <Layout>
      <div className=" block p-6 rounded-lg shadow-lg bg-white max-w-2xl mx-auto">
        <section className="h-screen">
          <div className="px-3 mx-auto text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center g-6">
              <div className="">
                <Logo></Logo>
                <form>
                  <div className=" grid gap-4">
                    <div className="form-group mb-3 flex ">
                      <input
                        type="text"
                        className="form-control
          block
          w-250
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
        
          focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                        id="username"
                        aria-describedby="emailHelp123"
                        onChange={nameHandler}
                        placeholder="이름(필수)"
                        value={uiName}
                      />
                      {uiName.length > 0 && <span>{nameMessage}</span>}
                      <div className="flex justify-center">
                        <div className="mx-9 my-auto form-check form-check-inline">
                          <input
                            onClick={isCheckBoxClicked}
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="male"
                            value={1}
                            onChange={(event) =>
                              setUiGender(event.target.value)
                            }
                          />
                          <label
                            className="form-check-label inline-block text-gray-800"
                            htmlFor="male"
                          >
                            남자
                          </label>
                        </div>
                        <div className="form-check my-auto form-check-inline">
                          <input
                            onClick={isCheckBoxClicked}
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="female"
                            value={2}
                            onChange={GenHandler}
                          />
                          <label
                            className="form-check-label inline-block text-gray-800"
                            htmlFor="female"
                          >
                            여자
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="relative form-group mb-6 ">
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
                        id="phone"
                        aria-describedby="emailHelp124"
                        onChange={phoneHandler}
                        maxLength={11}
                        placeholder="(필수)전화번호 형식(-제외)"
                        value={uiPhone}
                      />
                      {uiPhone.length > 0 && (
                        <span className="text-red-500 font-semibold">
                          {phoneNumberMessage}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="relative form-group mb-6">
                    <button
                      onClick={DuplicationCheck}
                      className="absolute top-1.5 right-4 border px-3 border-black bg-black hover:opacity-60 text-white rounded-md "
                    >
                      중복검사
                    </button>
                    <input
                      type="id"
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
                      placeholder="(필수)아이디"
                      onChange={idHandler}
                      value={uiId}
                    />
                    {uiId.length > 0 && (
                      <span className="text-red-500 font-semibold">
                        {IdMessage}
                      </span>
                    )}
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
                      id="email"
                      placeholder="이메일(필수)"
                      onChange={emailHandler}
                      value={uiEmail}
                    />
                    {uiEmail.length > 0 && (
                      <span className="text-red-500 font-semibold">
                        {emailMessage}
                      </span>
                    )}
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
                      id="birth"
                      placeholder="(필수)생년월일 형식 yyyy-mm-dd "
                      onChange={uiBirthHandler}
                      value={uiBirth}
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
                      id="pw"
                      placeholder="(필수)비밀번호"
                      onChange={pwHandler}
                      value={uiPwd}
                    />
                    {uiPwd.length > 0 && (
                      <span className="text-red-500 font-semibold">
                        {passwordMessage}
                      </span>
                    )}
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
                      id="pw2"
                      placeholder="(필수)비밀번호 확인"
                      onChange={pwCheckHandler}
                    />
                    {uiPwdCheck.length > 0 && (
                      <span className="text-red-500 font-semibold">
                        {passwordMessage}
                      </span>
                    )}
                  </div>
                  <div className="form-group form-check text-center mb-6">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                      id="agree"
                      checked
                      onChange={() => {}}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck25"
                    >
                      개인정보 수집에 동의합니다
                    </label>
                  </div>
                  <button
                    onClick={(e) => onSubmitHandler(e)}
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
    </Layout>
  );
};
export default Signup;
