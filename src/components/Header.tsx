import React from 'react'
import Image from "next/image"
import { Inter } from '@next/font/google'
import logo from "../assets/images/TX_CM.png"

const inter = Inter({ subsets: ['latin'] })

const Header = () => {
  return (
      <div className=" relative z-10">
          <div className={`fixed py-6 px-6 top-0 left-0 right-0  text-white flex justify-between items-center ${inter.className}`}>
              <div className="">
                    <Image
                        src={logo}
                        alt={"logo"}
                        width={30}
                        height={30}
                    />
                </div>
                <div>
                    <ul className=' flex justify-between gap-9 items-center'>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
          </div>  
     </div>
  )
}

export default Header