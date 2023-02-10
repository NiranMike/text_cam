import React, { useState, useEffect, useRef, useCallback } from 'react'
import { createWorker } from "tesseract.js";
import { motion } from 'framer-motion';
import * as tf from '@tensorflow/tfjs';
import { models } from '@tensorflow/tfjs';
const m = require("../public/lite-model_keras-ocr_float16_2.tflite")
interface Props {}

const ConversionPage: React.FC<Props> = () => {
  
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null >(null)
  const [textResult, setTextResult] = useState<string>("");

  const worker = createWorker();
  const convertImageToText = useCallback(async () => {
    if(!selectedImage) return;
    await (await worker).load();
    await (await worker).loadLanguage("eng");
    await (await worker).initialize("eng");
    const { data } = await (await worker).recognize(selectedImage);
  },[worker,selectedImage])

  const changeImageButton = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e && e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    } else {
      setSelectedImage(null);
      setTextResult("");
    }
  }


  return (
    <div className='text-black bg-white h-screen'>
      <div className='bg-white flex mx-auto w-full justify-center items-center h-screen my-auto'>
        <motion.input 
        type="file"
        id="upload"
        accept="image"
        onChange={changeImageButton}
        placeholder={"Upload Image"} whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className='border absolute file:border-none file:z-[-1] file:bg-transparent bg-black hover:bg-black  hover:text-white rounded-full btn px-5 py-3 text-white font-bold' />
      </div>
      
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