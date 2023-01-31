import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div>
      <div className="mx-auto max-w-5xl m-10">
        <div className="flex justify-around pb-2 ">
          <div className="flex w-100">
            <div className=" p-1 ml-3">
              <Link to="/detail/중국집">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-4 top-4 font-bold whitespace-nowrap">
                    중국집
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full"
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/중국집.png"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/일식돈까스">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-4 top-4 font-bold whitespace-nowrap">
                    일식/돈까스
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/일식9.png"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/분식">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-1 top-4 font-bold">
                    분식
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/분식.png"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/한식">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-1 top-4 font-bold">
                    한식
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/한식5.png"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-around pb-2 ">
          <div className="flex  w-100">
            <div className="p-1 ml-3">
              <Link to="/detail/치킨">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-1 top-4 font-bold">
                    치킨
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/치킨3.png"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/피자양식">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-4 top-4 font-bold whitespace-nowrap">
                    피자/양식
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/피자3.png"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/프랜차이즈">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-4 top-4 font-bold whitespace-nowrap">
                    프랜차이즈
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/핫도그.png"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/편의점마트">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-4 top-4 font-bold whitespace-nowrap">
                    편의점/마트
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/편의점.png"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-around pb-2 ">
          <div className="flex  w-100">
            <div className="p-1 ml-3">
            <Link to="/detail/족발보쌈">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-4 top-4 font-bold whitespace-nowrap">
                    족발/보쌈
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/족발보쌈.png"
                  />
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
            <Link to="/detail/카페디져트">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-4 top-4 font-bold whitespace-nowrap">
                    카페/디저트
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/카페디저트.png"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/야식">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-2 top-4 font-bold whitespace-nowrap">
                    야식
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/야식2.png"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex w-100 invisible">
            <div className="w-full p-1">
              <Link to="/detail/편의점마트">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-4 top-4 font-bold whitespace-nowrap">
                    편의점/마트
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/편의점.png"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-start mb-11">
          <div className="flex">
            <div className="mx-5 p-1 pd">
              <Link to="/detail/족발보쌈">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-4 top-4 font-bold whitespace-nowrap">
                    족발/보쌈
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/족발보쌈.png"
                  />
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full mx-3 p-1">
              <Link to="/detail/카페디져트">
                <button className="relative h-100 w-100 border">
                  <span className="absolute h-14 w-14 left-4 top-4 font-bold whitespace-nowrap">
                    카페/디저트
                  </span>
                  <img
                    alt="gallery"
                    className="block object-cover   object-center w-full h-full "
                    //hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out
                    src="/photo/카페디저트.png"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainMenu;
