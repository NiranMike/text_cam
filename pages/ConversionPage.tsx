import React, { useState, useEffect } from 'react'
import Contact from '@/src/components/Contact'
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
    const tesseract = await recognize(imageUrl,'eng');
    setRecognizedText(tesseract.data.text);
    setLoading(false);
  };

  return (
    <div className='bg-white text-white h-screen py-12'>
          <h1>OCR Text Recognition</h1>
            <label htmlFor="file">Drop file</label>
            <input type="file" id="file" onChange={handleImageChange} />
            <button onClick={recognizeText} disabled={loading}>
                {loading ? 'Recognizing...' : 'Recognize Text'}
            </button>
          {recognizedText && (
              <>
                <label htmlFor="text">To:</label>
                <textarea id='text' value={recognizedText} readOnly={true} />
              </>
                
            )}
    </div>
  )
}

export default ConversionPage