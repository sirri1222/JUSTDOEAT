import React, { useState } from "react";
import instance from "../api/axios";
import Logo from "../components/Logo";

const Signup = () => {
  const [uiEmail, setuiEmail] = useState("");
  const [uiPwd, setUiPwd] = useState("");
  const [uiPwdCheck, setUiPwdCheck] = useState("");

  const [uiGen, setUiGender] = useState(1);
 
  

  const [uiId, setUiid] = useState("");
  const [uiPhone, setUiPhone] = useState("");
  const [uiName, setUiName] = useState("");
  const [usabledId, setUsableId] = useState("");
const [uiBirth, setUiBirth] = useState("")
  const isCheckBoxClicked = () => {
    setUiGender(!uiGen);
  };
  const emailHandler = (event) => setuiEmail(event.target.value);
  const nameHandler = (event) => setUiName(event.target.value);
  const phoneHandler = (event) => setUiPhone(event.target.value);
    
    

 const autoHyphenPhone = uiPhone.replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`);
 const autoHyphenBirth = uiBirth.replace(/^(\d{4})(\d{2})(\d{2})$/, `$1-$2-$3`);
  const GenHandler = (event) => {
    setUiGender(uiGen + 1);
  };
  console.log(uiGen);
  const pwHandler = (event) => setUiPwd(event.target.value);
  const uiBirthHandler = (event) => setUiBirth(event.target.value);
  const pwCheckHandler = (event) => setUiPwdCheck(event.target.value);
  const idHandler = (event) => setUiid(event.target.value);
  const onSubmitHandler = (event) => {
    // 로그인 처리
    
   

    // 이메일 유효성 검사
    const isValidEmail = uiEmail.includes("@") && uiEmail.includes(".");
    event.preventDefault();
    if (uiId === "") {
      alert(" 필수 정보를 모두 입력해 주세요.");
    } 
     if (uiName === "") {
      alert(" 필수 정보를 모두 입력해 주세요.");
    } 
    if (uiPhone === "") {
      alert(" 필수 정보를 모두 입력해 주세요.");
    }
    if (uiEmail === "") {
      alert(" 필수 정보를 모두 입력해 주세요.");
    }
    if (uiBirth === "") {
      alert(" 필수 정보를 모두 입력해 주세요.");
    }
    if (uiPwd === "") {
      alert(" 필수 정보를 모두 입력해 주세요.");
    }
    if (!autoHyphenBirth  ) {
      alert(" 생년월일 형식이 잘못되었습니다. ");
    }
    if (!autoHyphenPhone) {
      alert("전화번호 형식이 잘못되었습니다.");
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
    }
    else{
     
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
        uiPwd
  
      })
      .then((res) => {
        console.log( "성공", res);
      })
      .catch((res) => {
        console.log("실패",res);
      });

      
  };
  const DuplicationAPI = async (uiId) => {
    let return_value;
    await instance
      .get("http://192.168.0.156:9988/member/list?page=0", { 
        uiId
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
    DuplicationAPI
  
    .then((res) => {
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
                      id="exampleInput123"
                      aria-describedby="emailHelp123"
                      onChange={nameHandler}
                      placeholder="이름(필수)"
                      value={uiName}
                    />
                    <div className="flex justify-center">
                      <div className="mx-9 my-auto form-check form-check-inline">
                        <input
                          onClick={isCheckBoxClicked}
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value={1}
                          onChange={(event) => setUiGender(event.target.value)}
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="inlineCheckbox1"
                        >
                          남자
                        </label>
                      </div>
                      <div className="form-check my-auto form-check-inline">
                        <input
                          onClick={isCheckBoxClicked}
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value={2}
                          onChange={GenHandler}
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="inlineCheckbox2"
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
                      id="exampleInput124"
                      aria-describedby="emailHelp124"
                      onChange={phoneHandler}
                      placeholder="(필수)전화번호 형식 010-0000-0000"
                   value={uiPhone}
                   />
                  </div>
                </div>

                <div className="relative form-group mb-6">
                  <button 
                onClick={DuplicationCheck}
                  className="absolute top-1.5 right-4 border px-3 border-black bg-black hover:opacity-60 text-white rounded-md ">중복검사</button>
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
                    placeholder="이메일(필수)"
                    onChange={emailHandler}
                    value={uiEmail}
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
                    id="exampleInput125"
                    placeholder="(필수)생년월일 형식 yyyy-mm-dd "
                    onChange={uiBirthHandler}
                    value= {uiBirth}
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
                    placeholder="(필수)비밀번호"
                    onChange={pwHandler}
                    value={uiPwd}
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
                    placeholder="(필수)비밀번호 확인"
                    onChange={pwCheckHandler}
                  />
                </div>
                <div className="form-group form-check text-center mb-6">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck25"
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
  );
};
export default Signup;
