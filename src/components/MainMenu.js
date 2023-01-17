import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div>
     
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-around ">
          <div className="flex w-100">
              <div className=" p-1 ml-3">
                <Link to="/detail">
                  <button >
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg
                    opacity-1 transition duration-300 ease-in-out hover:opacity-60"
                      src="/photo/중국집.png"
                    />
                    중식
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex  w-100">
              <div className="w-full p-1">
                <Link to="/detail">
                  <button>
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg
                    opacity-1 transition duration-300 ease-in-out hover:opacity-60"
                      src="/photo/일식9.png"
                    />
                    일식
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex  w-100">
              <div className="w-full p-1">
                <Link to="/detail">
                  <button>
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg
                    opacity-1 transition duration-300 ease-in-out hover:opacity-60"
                      src="/photo/분식.png"
                    />
                    분식
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex  w-100">
              <div className="w-full p-1">
                <Link to="/detail">
                  <button>
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg
                    opacity-1 transition duration-300 ease-in-out hover:opacity-60"
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
                <Link to="/detail">
                  <button>
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg
                    opacity-1 transition duration-300 ease-in-out hover:opacity-60"
                      src="/photo/치킨3.png"
                    />
                    치킨
                  </button>{" "}
                </Link>
              </div>
            </div>
            <div className="flex  w-100">
              <div className="w-full p-1">
                <Link to="/detail">
                  <button>
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg
                    opacity-1 transition duration-300 ease-in-out hover:opacity-60"
                      src="/photo/피자3.png"
                    />
                    피자
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex  w-100">
              <div className="w-full p-1">
                <Link to="/detail">
                  <button>
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg
                    opacity-1 transition duration-300 ease-in-out hover:opacity-60"
                      src="/photo/핫도그.png"
                    />
                    핫도그
                  </button>{" "}
                </Link>
              </div>
            </div>
            <div className="flex  w-100">
              <div className="w-full p-1">
                <Link to="/detail">
                  <button>
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg
                    opacity-1 transition duration-300 ease-in-out hover:opacity-60 bg-orange-400"
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
              <div className=" p-1">
                <Link to="/detail">
                  <button>
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg
                    opacity-1 transition duration-300 ease-in-out hover:opacity-60"
                      src="/photo/족발보쌈.png"
                    />
                    족발보쌈
                  </button>{" "}
                </Link>
              </div>
            </div>
            <div className="flex  w-100">
              <div className="w-full p-1">
                <Link to="/detail">
                  <button>
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg
                    opacity-1 transition duration-300 ease-in-out hover:opacity-60"
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
