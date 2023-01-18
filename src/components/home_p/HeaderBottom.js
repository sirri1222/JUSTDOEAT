import React from 'react'

const HeaderBottom = () => {
  return (
    <div> 
      {/* <!-- Background image --> */}
    <div className="relative">
    <img src='/photo/main_bg.jpg' className='bg-no-repeat w-full bg-center mx-auto' alt='치킨'></img>
      <div className="absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-gray-500/40">
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white px-6 md:px-12">
            
            <h1 className="text-5xl font-bold mt-0 mb-6">JUST DO EAT</h1>
            <h3 className="text-3xl font-bold mb-8">어디로 배달해 드릴까요?</h3>
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" 
      className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal
       text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition 
       ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
        placeholder="주소를 입력해주세요." 
        aria-label="Search" aria-describedby="button-addon2"/>
      <button className="btn px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Background image --> */}
    </div>
  )
}

export default HeaderBottom