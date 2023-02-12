import React from 'react'
import { Inter } from '@next/font/google';
import { motion } from "framer-motion"

const inter = Inter({ subsets: ['latin'] });

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity:0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 2.5 }}
      className='h-screen relative space-y-20 '>
        <h1 className={`text-gray-500 text-center text-xl tracking-[12px]  md:tracking-[20px]  font-bold ${inter.className}`}>CONTACT US</h1>
          <div className=' flex flex-col px-6 sm:px-[40px] md:px-[150px] lg:px-[250px] xl:px-[350px] '>
              <div className=' flex justify-center gap-3 flex-col'>
                  <input type="text" className='bg-gray-500 outline-none p-3 rounded-md' placeholder='Enter Name here' />
                  <textarea className='bg-gray-500 rounded-md outline-none px-3 p-3' placeholder='Enter Message here' id="" cols={30} rows={10}></textarea>
                  <div className=' flex justify-center mx-auto'>
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                    className={` rounded-full py-4 px-16 bg-white ${inter.className}`}>Submit</motion.button>
                  </div>
              </div>
              
          </div>
      </motion.div>
  )
}

export default Contact