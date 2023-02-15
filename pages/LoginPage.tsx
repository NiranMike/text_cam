import React from 'react'
import { FcGoogle } from "react-icons/fc"

const LoginPage = () => {
  return (
      <div className='flex h-screen w-screen items-center justify-center bg-slate-50'>
          <div className='flex w-64 h-auto px-4 gap-3 py-2 border cursor-pointer rounded-md border-gray-300 items-center justify-center'>
              <FcGoogle fontSize={30} />
              <span className='text-white font-bold'>Sign In With Google</span>
          </div>
    </div>
  )
}

export default LoginPage