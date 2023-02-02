
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, clearUser } from "../../redux/userSlice";

const Header = () => {
  // 3. userSlice 에 저장해 둔 user 정보 읽기
  //    useSlector( 함수 전달)
  const user = useSelector((state) => state.user);
  console.log("사용자 로그인 정보 ", user);
  const dispatch = useDispatch();
  //
  const login = () => {
    // dispatch(loginUser());
  };
  // 5. 로그아웃 기능
  const logout = () => {
    dispatch(clearUser());
    navigate("/home");
    alert("로그아웃 되었습니다.");
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex px-10 bg-white border-b-2 border-slate-100">
        <div
          className="navbar navbar-expand-sm relative 
        flex items-center justify-between w-full "
        >
          <Link to="/home">
            <img
              className=" ml-10 w-20 m-3 "
              src="/photo/jdelogo-s.png"
              alt="로고"
            ></img>
          </Link>
          <div className="flex">
            <input
              type="search"
              className="  ml-20  px-20  mr-4 text font-normal
              drop-shadow
        border-gray-300 rounded transition
       ease-in-out m-0 focus:text-gray-700 focus:bg-white
        focus:border-red-600 
       focus:outline-none"
              placeholder="주소를 입력해주세요."
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={() => {}}
            />
            <button
              className="btn px-3 py-3 p bg-red-600 text-white font-medium text-xs 
              leading-tight uppercase rounded shadow-md
               hover:bg-red-700 hover:shadow-lg"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center relative ml-5 mr-10 gap-1">
          <div className="flex items-center w-28 ">
            {user.id === "" ? (
              <Link to="/login">
                <img className="" src="/photo/loginicon.png" alt="로그인"></img>
              </Link>
            ) : (
              <img
                onClick={logout}
                src="/photo/logouticon.png"
                alt="로그아웃"
                className="cursor-pointer"
              ></img>
            )}
          </div>

          <div className="flex items-center w-11 mt-1 ">
            <Link to="/shoppingbag">
              <button className="text-gray-500  ">
                <img className="" src="/photo/bskicon.png" alt="장바구니"></img>

                <span
                  className="text-white bg-red-600 absolute rounded-full 
                text-xs top-10  py-1 px-2"
                >
                  0
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

