import React, { useState } from 'react';
import { excelToXml } from '../services/excelToXml';
import '../styles/ExcelUpload.css';

const ExcelUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const xml = await excelToXml(file);
        setMessage('EXCEL_UPLOAD_SUCCESS');
        console.log(xml);
      } catch (error) {
        setMessage('EXCEL_UPLOAD_ERROR');
        console.error(error);
      }
    } else {
      setMessage('NO_FILE_SELECTED');
    }
  };

  return (
    <div id="excel-upload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default ExcelUpload;