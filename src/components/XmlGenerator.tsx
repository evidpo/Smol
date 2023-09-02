import React, { useState } from 'react';
import { excelToXml } from '../services/excelToXml';
import '../styles/XmlGenerator.css';

const XmlGenerator: React.FC = () => {
  const [xmlData, setXmlData] = useState<string | null>(null);

  const generateXml = async (excelData: any) => {
    try {
      const xml = await excelToXml(excelData);
      setXmlData(xml);
    } catch (error) {
      console.error('XML_GENERATION_ERROR', error);
    }
  };

  return (
    <div id="xml-generator">
      <button onClick={generateXml}>Generate XML</button>
      {xmlData && (
        <div>
          <h2>Generated XML:</h2>
          <pre>{xmlData}</pre>
        </div>
      )}
    </div>
  );
};

export default XmlGenerator;