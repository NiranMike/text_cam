import React, { useState, useEffect, useRef, useCallback, CSSProperties } from 'react'
import { createWorker } from "tesseract.js";
import { motion } from 'framer-motion';
import Image from 'next/image'
import { Inter } from '@next/font/google';
import Loader from "@/src/components/Loader"
import SyncLoader from "react-spinners/SyncLoader";

const inter = Inter({ subsets: ['latin'] });

interface Props {}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
const ConversionPage: React.FC<Props> = () => {
  
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null >(null)
  const [textResult, setTextResult] = useState<string>("");

    const worker = createWorker();
    const changeImageButton = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e && e.target.files && e.target.files[0]) {
    setLoading(true)
    setSelectedImage(e.target.files[0]);
    } else {
    setSelectedImage(null);
    setTextResult("");
    }
    };

    const convertImageToText = useCallback(async () => {
      if (!selectedImage) return;
      await (await worker).load()
      await (await worker).loadLanguage("eng");
      await (await worker).initialize("eng");
      const { data } = await (await worker).recognize(selectedImage);
      setTextResult(data.text);
      setLoading(false)
  }, [worker, selectedImage]);
    
  useEffect(() => {
    convertImageToText();
  }, [selectedImage, convertImageToText]);
  const src = selectedImage ? URL.createObjectURL(selectedImage) : '';

  return (
    <div className='text-black bg-[#28272A] h-screen'>
      <div className='bg-[#28272A] py-[80px] flex mx-auto justify-center w-full items-center'>
        <motion.label htmlFor="img" 
         className={`border-transparent cursor-pointer sticky file:border-none file:z-[-1] file:bg-transparent bg-black hover:bg-black ${inter.className}  hover:text-white rounded-full btn px-5 py-3 text-white font-bold`}
         whileHover={{ scale: 1.1 }}
         transition={{ type: "spring", stiffness: 400, damping: 10 }}
         >Upload Image</motion.label>
        <motion.input 
          type="file"
          id="img"
          accept="image/*"
          onChange={changeImageButton}
          placeholder={"Upload Image"} 
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className='border-transparent hidden sticky file:border-none file:z-[-1] file:bg-transparent bg-black hover:bg-black  hover:text-white rounded-full btn px-5 py-3 text-white font-bold' />
      </div>
      {!loading ? (
        <div className='md:mx-[100px] rounded-lg gap-8 px-5 md:px-[100px] py-12 flex flex-col md:flex-row justify-between bg-[#1E1E1E]'>
          <div id='textarea' className={`text-white h-[200px] md:h-[260px] scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#28272A]  overflow-hidden outline-none rounded-lg  py-4 ${inter.className} bg-[#2B2D2E]`} >{textResult}</div>
          <div className='rounded-lg h-[200px] md:h-[260px] border-none'>
            <Image
              className='bg-[#2B2D2E] object-cover h-full rounded-lg'
              src={src}
              alt="Image"
              height={130}
              width={450}
            />
          </div>
      </div>
      ) : (
          
        <div className='md:mx-[100px] rounded-lg px-[100px] py-12 flex justify-between bg-[#1E1E1E]'>
         <SyncLoader 
         cssOverride={override}
         size={20}
         aria-label="Loading Spinner"
         data-testid="loader"
         color="#1E1E1E" />
      </div>
      )
    }
    </div>
  );
}


export default ConversionPage