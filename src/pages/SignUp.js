import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import instance from "../api/axios";
import Logo from "../components/Logo";
import SignupModal from "../components/modal_p/SignupModal";

const Signup = () => {
  const dispatch = useDispatch();
  const [uiEmail, setuiEmail] = useState("");
  const [uiPwd, setUiPwd] = useState("");
  const [uiGen, setUiGender] = useState(1);
  const [uiId, setUiid] = useState("");
  const [uiPhone, setUiPhon] = useState("");
  const [uiName, setUiName] = useState("");

  const isCheckBoxClicked = () => {
    setUiGender(!uiGen);
  };
  const emailHandler = (event) => setuiEmail(event.target.value);
  const nameHandler = (event) => setUiName(event.target.value);
  const phoneHandler = (event) => setUiPhon(event.target.value);

  const pwHandler = (event) => setUiPwd(event.target.value);
  const idHandler = (event) => setUiid(event.target.value);
  const onSubmitHandler = (event) => {
    // 로그인 처리
  // 1. 아이디검사
        // 첫글자는 반드시 영소문자로 이루어지고, 
        // 숫자가 하나이상 포함되어야함.
        // 아이디의 길이는 4~12글자 사이
        // 비밀번호 특수문자 검사를 위한 정규식표현.
const specialLetter = uiPwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        const regExp1 = uiId.includes("/^[a-z][a-z\d]{3,11}$/") && uiId.includes("/[0-9]/");
    
        // 이메일 유효성 검사
    const isValidEmail = uiEmail.includes("@") && uiEmail.includes(".");
    event.preventDefault();
    if (!isValidEmail) {
      alert("이메일 형식이 잘못되었습니다.");
    }
    if (!specialLetter) {
      alert("비밀번호를 입력해 주세요.");
    }
    if(!regExp1)
    { alert("아이디는 영소문자로 시작하는 4~12글자이며, 숫자를 하나이상 포함하세요.")}

   instance.post("http://192.168.0.156:9988/member/join" , {uiName, uiId, uiEmail, uiPhone })
   .then((res)=>{
    console.log(res)
   })
   .catch((res)=>{
    console.log(res)
   })
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
                      placeholder="이름"
                    />
                 <div className="flex justify-center">
  <div className="mx-9 my-auto form-check form-check-inline">
    <input onClick={isCheckBoxClicked} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"/>
    <label className="form-check-label inline-block text-gray-800" for="inlineCheckbox1">남자</label>
  </div>
  <div className="form-check my-auto form-check-inline">
    <input onClick={isCheckBoxClicked} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"/>
    <label className="form-check-label inline-block text-gray-800" for="inlineCheckbox2">여자</label>
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
                      placeholder="전화번호"
                    />
                  </div>
                </div>

                <div className="relative form-group mb-6">
                <button className="absolute top-1.5 right-4">중복검사</button>
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
                    placeholder="아이디"
                    onChange={idHandler}
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
                    placeholder="이메일"
                    onChange={emailHandler}
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
                    onChange={pwHandler}
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
