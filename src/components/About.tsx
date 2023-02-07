import React from 'react'
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

const About = () => {
  return (
    <div className= {`md:mx-[100px] mx-6 relative h-screen  ${inter.className}`}>
          <div className=''>
              <h1 className={`text-gray-500 text-center text-xl tracking-[12px]  md:tracking-[20px]  font-bold ${inter.className}`}>ABOUT US</h1>
          </div>
          <div className='my-auto flex flex-col justify-center h-full '>
              <p className={`text-gray-500 text-center ${inter.className} text-lg md:text-2xl `}>We are a team of technology enthusiasts and problem solvers dedicated to making it easier for people to extract text from images and scanned documents. Our text OCR web app uses cutting-edge optical character recognition technology to accurately and efficiently convert images to editable text.</p>
          </div>
    </div>
  )
}

export default About