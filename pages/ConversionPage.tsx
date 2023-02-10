import React, { useState, useEffect, useRef, useCallback } from 'react'
import { createWorker } from "tesseract.js";
import { motion } from 'framer-motion';
import Image from 'next/image'
import { Inter } from '@next/font/google';
import Loader from "@/src/components/Loader"


const inter = Inter({ subsets: ['latin'] });

interface Props {}

const ConversionPage: React.FC<Props> = () => {
  
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null >(null)
  const [textResult, setTextResult] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const worker = createWorker();
  const convertImageToText = useCallback(async () => {
    
    if (!selectedImage) return;
    setLoading(true);
    await (await worker).load();
    await (await worker).loadLanguage("eng");
    await (await worker).initialize("eng");
    
    const { data } = await (await worker).recognize(selectedImage);
    setLoading(false);
    setTextResult(data.text);
    
    console.log(data.text);
  },[worker,selectedImage])

  useEffect(()=>{
    
    convertImageToText();
  },[selectedImage, convertImageToText])

    
  
  const changeImageButton = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e && e.target.files && e.target.files[0]) {
      
      setSelectedImage(e.target.files[0]);
    } else {
      setSelectedImage(null);
      setTextResult("");
    }
  }
  const src =  (selectedImage ? URL.createObjectURL(selectedImage) : '');


  return (
    <div className='text-black bg-[#28272A] h-screen overflow-hidden'>
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
        <div className='md:mx-[100px] rounded-lg px-[100px] py-12 flex justify-between bg-[#1E1E1E]'>
        <textarea cols={40}  id='textarea' className={`text-white outline-none rounded-lg px-4 py-4 text-center ${inter.className} bg-[#2B2D2E]`} value={textResult} readOnly={true} />
        <div className='rounded-lg h-[260px] border-none'>
          <Image
            className='bg-[#2B2D2E] object-cover h-full rounded-lg'
            src={src}
            alt={''}
            height={130}
            width={450}
          />
        </div>
      </div>
      ):(
        <div className='md:mx-[100px] rounded-lg px-[100px] py-12 flex justify-between bg-[#1E1E1E]'>
        <Loader />
        <Loader />
      </div>
      )
    }
      
    </div>
  );
}

{/* <div className='text-black bg-white h-screen'>
      <h1 className='text-black bg-white'>OCR Text Recognition</h1>
      <label htmlFor="input">File</label>
      <input id='input' className='text-white' type="file" onChange={handleImageChange} />
      <button className='p-3 bg-white' onClick={recognizeText} disabled={loading}>
        {loading ? 'Recognizing...' : 'Recognize Text'}
      </button>
      <label htmlFor="textarea">Message</label>
      {recognizedText && (
        <textarea id='textarea' className='text-white' value={recognizedText} readOnly={true} />
      )}
    </div> */}

export default ConversionPage