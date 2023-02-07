import React, { useEffect, useRef } from 'react'
import { animateScroll as scroll } from "react-scroll";
import { Inter } from '@next/font/google';
import {BsArrowDownCircle} from "react-icons/bs"

const inter = Inter({ subsets: ['latin'] });

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        if (!textRef.current) return;

        let shadow = "";
        for (let i = 0; i < 10; i++) {
          shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #d9d9d9";
        }
        textRef.current.style.textShadow = shadow;
    }, []);
  
  return (
    <div className='mx-auto relative flex-col flex justify-center items-center h-screen my-auto'>
          <h1 data-text="TEXT CAM" ref={textRef} className={`text-white relative  hero-text font-bold text-[50px] sm:text-[60px] md:text-[95px] lg:text-[150px] xl:text-[180px] 2xl:text-[250px] ${inter.className}`}>TEXT CAM</h1>
          <button className='border btn rounded px-5 py-3 text-white font-bold'>Try Now</button>
          <div className=''>
            <BsArrowDownCircle className='text-[#f0e463] cursor-pointer animate-bounce mt-[80px]' size={32} />
          </div>
    </div>
  )
}


export default Hero;