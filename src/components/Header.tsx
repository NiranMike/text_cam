import React from 'react'
import Image from "next/image"
import { Inter } from '@next/font/google'
import logo from "../assets/images/TX_CM.png"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Header = () => {
  return (
      <div className=" relative z-10">
          <div className={`static py-6 px-6 top-0 left-0 right-0  text-white flex justify-between items-center ${inter.className}`}>
              <Link href={'/'} className="">
                    <Image
                        src={logo}
                        alt={"logo"}
                        width={30}
                        height={30}
                    />
                </Link>
                <div>
                    <ul className=' flex justify-between gap-9 items-center'>
                        <Link href={'#about'}><li className='cursor-pointer'>About</li></Link>
                        <Link href={'#contact'}><li className='cursor-pointer'>Contact Us</li></Link>
                    </ul>
                </div>
          </div>  
     </div>
  )
}

export default Header