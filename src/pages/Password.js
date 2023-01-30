import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const Password = () => {
  return (
    <div>
      <div className="flex justify-center">
    <div className="rounded-lg shadow-lg bg-white max-w-4xl">
      <Link href="#!">
       <Logo/>
      </Link>
      <div className="p-6">
        <h5 className="text-gray-900 text-xl text-center font-medium mx-auto mb-10">   이메일로 임시 비밀번호가 전송되었습니다.</h5>
        <p className="text-gray-700 text-base mb-4">
      
        </p>
        <Link to="/login"  >
        <button 
        type="button" className="
        block mx-auto my-20 px-6 py-2.5
         bg-gray-600
          text-white font-medium text-xs leading-tight uppercase rounded shadow-md
           hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg
            focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">로그인하러 가기</button>
     </Link> 
     </div>
    </div>
  </div></div>
  )
}

export default Password