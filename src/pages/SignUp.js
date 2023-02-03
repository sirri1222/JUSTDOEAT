import React, { useState } from "react";
import instance from "../api/axios";
import Logo from "../components/util/Logo";
import Layout from "../components/layout/Layout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Signup = () => {
  const naviagte = useNavigate();
  // 이름
  const [uiName, setUiName] = useState("");

  // 아이디 중복체크
  const [uiIdCheck, setUIdCheck] = useState(false);
  const [uiId, setUiid] = useState("");

  // 전화번호 중복 체크
  const [uiPhone, setUiPhone] = useState("");
  const [uiPhoneCheck, setUiPhoneCheck] = useState(false);

  // 이메일 중복체크
  const [uiEmail, setuiEmail] = useState("");
  const [uiEmailCheck, setUiEmailCheck] = useState(false);
  // 성별체크
  const [uiGenF, setUiGenF] = useState(false); // 여성
  const [uiGenM, setUiGenM] = useState(true); // 남성
  const [uiGen, setUiGen] = useState(1); // 남성 1, 여성 2, 선택 0

  // 비밀번호
  const [uiPwd, setUiPwd] = useState("");
  const [uiPwdCheck, setUiPwdCheck] = useState("");

  const [uiBirth, setUiBirth] = useState("");

  //input 하단 오류메시지 상태저장
 
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneNumberMessage, setPhoneNumberMessage] = useState("");
  const [IdMessage, setIdMessage] = useState("");
  const [BirthMessage, setBirthMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  // 남/여 성별 체크박스
  const isCheckBoxClicked = (e) => {
    const { value } = e.target;
    setUiGen(parseInt(value));
  };
  // 남/여 성별 체크박스
  useEffect(() => {
    if (uiGen === 1) {
      setUiGenF(false);
      setUiGenM(true);
    } else {
      setUiGenF(true);
      setUiGenM(false);
    }
  }, [uiGen]);
  // 하이픈 넣기
  //   const phone = (number)=>{
  //     let number = number
  //   .replace(/ /g, '') // 공백이 들어있다면 지워주고
  //   .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
  //   setUiPhone(number);

  // };

  const user = useSelector((state) => state.user);

  //  이름
  const nameHandler = (event) => {
    setUiName(event.target.value);
  
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
  // 아이디
  const idHandler = (event) => {
    setUiid(event.target.value);
    if (uiId.length < 5) {
      setIdMessage("아이디는 5글자 이상 입력해 주세요 ㅜ_ㅜ");
    } else {
      setIdMessage("올바른 형식입니다 :)");
    }
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
  //비밀번호 유효성검사
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  // 비밀번호
  const pwHandler = (event) => {
    setUiPwd(event.target.value);
    if (passwordRegex.test(event.target.value) === false) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    } else {
      setPasswordMessage("올바른 비밀번호 형식입니다 :)");
    }
  };
  // 비밀번호 확인
  const pwCheckHandler = (event) => {
    setUiPwdCheck(event.target.value);
    if (uiPwd !== uiPwdCheck) {
      setPasswordConfirmMessage(
        "비밀번호와 확인이 일치하지 않아요! 다시 확인해주세요 ㅜ ㅜ"
      );
    } else {
      setPasswordConfirmMessage("올바른 비밀번호 형식입니다 :)");
    }
  };

  useEffect(() => {
    if (uiPwd !== uiPwdCheck) {
      setPasswordConfirmMessage(
        "비밀번호와 확인이 일치하지 않아요! 다시 확인해주세요 ㅜ ㅜ"
      );
    } else {
      setPasswordConfirmMessage("올바른 비밀번호 형식입니다 :)");
    }
  }, [uiPwd, uiPwdCheck]);

  // 생년월일 유효성검사
  const HyphenregExpBirth = /^(?:(19\d{2})|(18\d{2}))-(\d{2})-(\d{2})/;

  const uiBirthHandler = (event) => {
    setUiBirth(event.target.value);

    if (!HyphenregExpBirth.test(event.target.value)) {
      setBirthMessage(
        "생년월일 형식이 틀렸습니다! -을 포함한 형식을 입력해주세요 ㅜ_ㅜ"
      );
    } else {
      setBirthMessage("올바른 생년월일 형식입니다 :)");
    }
  };

  const onSubmitHandler = (event) => {
    // 로그인 처리
    event.preventDefault();
    if (uiName === "") {
      return alert("이름을 입력해 주세요.");
    }
    if (uiPhone === "") {
      return alert("전화번호를 모두 입력해 주세요.");
    }
    if (uiPhoneCheck === false) {
      return alert("전화번호 중복 검사를 해 주세요.");
    }
    if (uiId === "") {
      return alert("아이디를 입력해 주세요.");
    }
    if (uiId.length < 5) {
      return alert("아이디는 5글자 이상 입력해 주세요.");
    }
    if (uiIdCheck === false) {
      return alert("아이디 중복검사를 입력해 주세요.");
    }
    if (uiEmail === "") {
      return alert("이메일을 입력해 주세요.");
    }
    if (!isValidEmail) {
      return alert("이메일 형식이 잘못되었습니다.");
    }
    if (uiEmailCheck === false) {
      return alert("이메일 중복검사를 입력해 주세요.");
    }
    if (uiBirth === "") {
      return alert("생년월일을 모두 입력해 주세요.");
    }
    if (!uiBirth) {
      return alert(" 생년월일 형식이 잘못되었습니다. ");
    }
    if (uiPwd === "") {
      return alert("비밀번호를 모두 입력해 주세요.");
    }
    if (uiPwd.length < 6) {
      return alert("비밀번호는 6글자 이상 입력해 주세요.");
    }
    if (passwordRegex.test(uiPwd) === false) {
      return alert(
        "비밀번호는 숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    }

    if (uiPwd !== uiPwdCheck) {
      return alert("비밀번호 확인이 일치하지 않습니다.");
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
        alert("가입이 완료되었습니다. 로그인해 주세요 :)");
        // 로그인 페이지로 이동
        naviagte("/login");
      })
      .catch((res) => {
        console.log("실패", res);
      });
  };
  // 아이디 중복 체크
  const DuplicationIdAPI = (e) => {
    e.preventDefault();
    instance
      .put("http://192.168.0.156:9988/member/idCheck", {
        uiId,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === true) {
          setUIdCheck(true);
          return alert(res.data.msg);
        } else {
          setUIdCheck(false);
          return alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.data.msg);
      });
  };

  // 이메일 중복 체크
  const DuplicationEmailAPI = (e) => {
    e.preventDefault();
    instance
      .put("http://192.168.0.156:9988/member/emailCheck", {
        uiEmail,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === true) {
          setUiEmailCheck(true);
          return alert(res.data.msg);
        } else {
          setUiEmailCheck(false);
          return alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.data.msg);
      });
  };
  // 전화번호 중복체크
  const DuplicationPhoneAPI = (e) => {
    e.preventDefault();
    instance
      .put("http://192.168.0.156:9988/member/phoneCheck", {
        uiPhone,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === true) {
          setUiPhoneCheck(true);
          return alert(res.data.msg);
        } else {
          setUiPhoneCheck(false);
          return alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.data.msg);
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

                      <div className="flex justify-center">
                        <div className="mx-9 my-auto form-check form-check-inline">
                          <input
                            onChange={isCheckBoxClicked}
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="male"
                            value={1}
                            checked={uiGenM}
                            // onChange={(event) =>
                            //   setUiGender(event.target.value)
                            // }
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
                            onChange={isCheckBoxClicked}
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="female"
                            value={2}
                            checked={uiGenF}
                            // onChange={GenHandler}
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
                      <button
                        onClick={DuplicationPhoneAPI}
                        className="absolute top-1.5 right-4 border-2 px-3 border-black  hover:opacity-60 font-semibold rounded-md "
                      >
                        중복검사
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
                        id="phone"
                        aria-describedby="emailHelp124"
                        onChange={phoneHandler}
                        maxLength={15}
                        placeholder="(필수)전화번호 형식(-제외)"
                        value={uiPhone}
                      />
                      {uiPhone.length > 0 && (
                        <span className="text-red-500 text-xs opacity-70 font-semibold">
                          {phoneNumberMessage}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="relative form-group mb-6">
                    <button
                      onClick={DuplicationIdAPI}
                      className="absolute top-1.5 right-4 border-2 font-semibold px-3 border-black hover:opacity-60 rounded-md "
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
                      <span className="text-red-500 text-xs opacity-80 font-semibold">
                        {IdMessage}
                      </span>
                    )}
                  </div>

                  <div className="relative form-group mb-6">
                    <button
                      onClick={DuplicationEmailAPI}
                      className="absolute top-1.5 right-4 border-2 px-3 border-black  hover:opacity-60 text-black font-semibold rounded-md "
                    >
                      중복검사
                    </button>
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
                      <span className="text-red-500 text-xs opacity-80 font-semibold">
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
                      maxLength={10}
                    />
                    {uiBirth.length > 0 && (
                      <span className="text-red-500 text-xs opacity-80 font-semibold">
                        {BirthMessage}
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
                      id="pw"
                      placeholder="(필수)비밀번호"
                      onChange={pwHandler}
                      value={uiPwd}
                      maxLength={16}
                    />
                    {uiPwd.length > 0 && (
                      <span className="text-red-500 text-xs opacity-80 font-semibold">
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
                      maxLength={16}
                    />
                    {uiPwdCheck.length > 0 && (
                      <span className="text-red-500 text-xs opacity-80 font-semibold">
                        {passwordConfirmMessage}
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
      bg-red-600
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
