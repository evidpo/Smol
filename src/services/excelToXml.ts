import * as ExcelJS from 'exceljs';
import * as xmlbuilder from 'xmlbuilder';

export const excelToXml = async (file: File): Promise<string> => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(file);
  
  const worksheet = workbook.getWorksheet(1);
  const xml = xmlbuilder.create('root');
  
  worksheet.eachRow((row, rowNumber) => {
    const rowXml = xml.ele('row', { number: rowNumber });
    
    row.eachCell((cell, colNumber) => {
      rowXml.ele('cell', { number: colNumber }, cell.value);
    });
  });
  
  return xml.end({ pretty: true });
};