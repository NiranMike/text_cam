import React from 'react'
import { Inter } from '@next/font/google';
import {motion} from "framer-motion"

const inter = Inter({ subsets: ['latin'] });

const About = () => {
  return (
    <div 
      className={`md:mx-[100px] mx-6 relative h-screen  ${inter.className}`}>
          <div className=''>
              <h1 className={`text-gray-500 pt-10 text-center text-xl tracking-[12px]  md:tracking-[20px]  font-bold ${inter.className}`}>ABOUT US</h1>
          </div>
      <motion.div
        initial={{ opacity:0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 2.5 }}
        className='my-auto flex flex-col pt-[160px] h-full '>
        <p className={`text-gray-500 text-sm text-center ${inter.className} text-lg md:text-2xl `}>Welcome to our text recognition website! We are dedicated to providing top-notch text recognition services to individuals, businesses, and organizations across the world. Our goal is to simplify the process of extracting text from images</p>
          </motion.div>
    </div>
  )
}

export default About