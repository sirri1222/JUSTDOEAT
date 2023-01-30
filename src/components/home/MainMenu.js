import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div>
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-around ">
          <div className="flex w-100">
            <div className=" p-1 ml-3   ">
              <Link to="/detail/중식">
                <button>
                  <img
                    alt="gallery"
                    className="block object-cover mb-3  object-center w-full h-full rounded-lg
                      hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out"
                    src="/photo/중국집.png"
                  />
                  중식
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/일식">
                <button>
                  <img
                    alt="gallery"
                    className="block object-cover mb-3  object-center w-full h-full rounded-lg
                      hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out"
                    src="/photo/일식9.png"
                  />
                  일식
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/분식">
                <button>
                  <img
                    alt="gallery"
                    className="block object-cover mb-3  object-center w-full h-full rounded-lg
                      hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out"
                    src="/photo/분식.png"
                  />
                  분식
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/한식">
                <button>
                  <img
                    alt="gallery"
                    className="block object-cover mb-3  object-center w-full h-full rounded-lg
                      hover:opacity-50  hover:scale-125  transition duration-300 ease-in-out"
                    src="/photo/한식5.png"
                  />
                  한식
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/치킨">
                <button>
                  <img
                    alt="gallery"
                    className="block object-cover mb-3  object-center w-full h-full rounded-lg
                      hover:opacity-50  hover:scale-125  transition duration-300 ease-in-out"
                    src="/photo/치킨3.png"
                  />
                  치킨
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/피자">
                <button>
                  <img
                    alt="gallery"
                    className="block object-cover mb-3  object-center w-full h-full rounded-lg
                      hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out"
                    src="/photo/피자3.png"
                  />
                  피자
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/핫도그">
                <button>
                  <img
                    alt="gallery"
                    className="block object-cover mb-3  object-center w-full h-full rounded-lg
                      hover:opacity-50  hover:scale-125  transition duration-300 ease-in-out"
                    src="/photo/핫도그.png"
                  />
                  핫도그
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full p-1">
              <Link to="/detail/편의점">
                <button>
                  <img
                    alt="gallery"
                    className="block object-cover mb-3  object-center w-full h-full rounded-lg
                      hover:opacity-50 hover:scale-125  transition duration-300 ease-in-out"
                    src="/photo/편의점.png"
                  />
                  편의점
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-11">
          <div className="flex">
            <div className="mx-5 p-1">
              <Link to="/detail/족발보쌈">
                <button>
                  <img
                    alt="gallery"
                    className="block object-cover mb-3  object-center w-full h-full rounded-lg
                      hover:opacity-50  hover:scale-125  transition duration-300 ease-in-out"
                    src="/photo/족발보쌈.png"
                  />
                  족발보쌈
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="flex  w-100">
            <div className="w-full mx-3 p-1">
              <Link to="/detail/카페디져트">
                <button>
                  <img
                    alt="gallery"
                    className="block object-cover mb-3  object-center w-full h-full rounded-lg
                      hover:opacity-50  hover:scale-125  transition duration-300 ease-in-out"
                    src="/photo/카페디져트.png"
                  />
                  카페디져트
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
