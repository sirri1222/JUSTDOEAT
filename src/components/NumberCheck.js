import React, { useState } from "react";

export const NumberCheck = () => {

  let [Number, setUpNumber] = useState(0)

  const Plus = ()=> {
    setUpNumber(Number => Number + 1)
  }
  const Minus = ()=> {
    if( Number < 1 ){return}
    setUpNumber(Number => Number - 1)
  }
  return (
    <div>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
      onClick={Minus}
          data-action="decrement"
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
         
          className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          value={Number}
         
        ></input>
        <button
      onClick={Plus}
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};
