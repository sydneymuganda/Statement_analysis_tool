import { Axios } from 'axios';
const apikey=import.meta.env.VITE_APIKEY;
export function dateSplicer(dateTimeString) {

    
var dateParts = dateTimeString.split(" ")[0].split("-");
var formattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
if(dateTimeString==("N/A")){ return "N/A"};

return formattedDate ; // Output: "24-02-15"

}
export function numberEdit(number){

return number.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });


}

// data.js

export async function uploadPdf(fullname, file) {
    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('file', file);
  
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer TGqrFD45yIPKAHxgSJW8QWAS', // Replace XXXXXXXXXXX with your actual token
      },
      body: formData,
    };
  
    try {
      const response = await fetch('https://api.sat.tausi.africa/v1/mpesa/upload_pdf', requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error uploading PDF:', error);
      throw error;
    }
  }
  
  // data.js

import axios from 'axios';

export async function AxiosPdf(fullname, file) {
  const formData = new FormData();
  formData.append('fullname', fullname);
  formData.append('file', file);

  const config = {
    method: 'post',
    url: 'http://localhost:5000/api/upload_pdf',
    data: formData,
    mode: 'no-cors', // Set no-cors mode
  };

  try {
   
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Error uploading PDF:', error);
    throw error;
  }
}
