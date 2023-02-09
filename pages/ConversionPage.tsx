import React, { useState, useEffect, useRef } from 'react'
import Contact from '@/src/components/Contact'
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import {recognize} from "tesseract.js"

interface Props {}

const ConversionPage: React.FC<Props> = () => {
  const [recognizedText, setRecognizedText] = React.useState<string>('');
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(URL.createObjectURL(event.target.files![0]));
  };

  const recognizeText = async () => {
    setLoading(true);
    const tesseract = await recognize(imageUrl, 'eng');
    setRecognizedText(tesseract.data.text);
    setLoading(false);
    console.log(recognizedText)
  };

  return (
    <div>
      <h1 className='text-white'>OCR Text Recognition</h1>
      <label htmlFor="input">File</label>
      <input id='input' className='text-white' type="file" onChange={handleImageChange} />
      <button className='p-3 bg-white' onClick={recognizeText} disabled={loading}>
        {loading ? 'Recognizing...' : 'Recognize Text'}
      </button>
      <label htmlFor="textarea">Message</label>
      {recognizedText && (
        <textarea id='textarea' className='text-white' value={recognizedText} readOnly={true} />
      )}
    </div>
  );
}

export default ConversionPage