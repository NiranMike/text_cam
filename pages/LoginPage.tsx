import React from 'react'
import { FcGoogle } from "react-icons/fc"
import {getSession, signIn, signOut, useSession} from "next-auth/react"
import { GetServerSidePropsContext } from 'next';

const LoginPage: React.FC = () => {
  const { data: session, status } = useSession();
  console.log(session)
  
  if (status === "authenticated") {

    const image = session.user?.image;
    return (
      <div>
        <p className=' text-white'>Welcome, {session.user?.name}</p>
        <img className='rounded-full' src={image ?? "default.png"} alt="" />
        <button className='py-3 px-3 rounded bg-white' onClick={()=> signOut()}>Sign Out</button>
      </div>
    )
  }
  return (
      <div className='flex h-screen w-screen items-center justify-center bg-slate-50'>
      <div
        onClick={() => signIn()}
        className='flex w-64 h-auto px-4 gap-3 py-2 border cursor-pointer rounded-md border-gray-300 items-center justify-center'>
              <FcGoogle fontSize={30} />
              <span className='text-white font-bold'>Sign In With Google</span>
          </div>
    </div>
  )
}

export default LoginPage

export const getServerSideProps = async (context: GetServerSidePropsContext) =>{
  const session = await getSession();
  if (!session) {
    return {
      redirect: {
        destination: "/ConversionPage"
      }
    }
  }
  return {
    props: {session}
  }
}