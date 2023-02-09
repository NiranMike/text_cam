import React, { useEffect, useRef } from 'react'
import { animateScroll as scroll } from "react-scroll";
import { Inter } from '@next/font/google';
import { BsArrowDownCircle } from "react-icons/bs"
import {motion,useScroll,
  useSpring,
  useTransform,
  MotionValue} from "framer-motion"
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        if (!textRef.current) return;

        let shadow = "";
        for (let i = 0; i < 7; i++) {
          shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #d9d9d9";
        }
        textRef.current.style.textShadow = shadow;
    }, []);
  
    
  
  return (
    <div className='mx-auto relative flex-col gap-6 flex justify-center items-center h-screen my-auto'>
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }} data-text="TEXT CAM" ref={textRef} className={`text-white relative hero-text font-bold text-[50px] sm:text-[60px] md:text-[95px] lg:text-[150px] xl:text-[180px] 2xl:text-[250px] ${inter.className}`}>TEXT CAM</motion.h1>
          <Link href={'/ConversionPage'}>
            <motion.button whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className='border hover:bg-white hover:text-black rounded-full btn px-5 py-3 text-white font-bold'>Try Now</motion.button>
          </Link>
      <Link href={'#about'} className=''>
        <motion.div whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <BsArrowDownCircle className='text-[#ffffff] cursor-pointer animate-bounce mt-[80px]' size={32} />
            </motion.div>
            
          </Link>
    </div>
  )
}


export default Hero;