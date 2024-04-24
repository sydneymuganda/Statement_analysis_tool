import { Axios } from 'axios';
import axios from 'axios';

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



export async function AxiosPdf(fullname, file,paymentMethod) {
  const formData = new FormData();
  formData.append('fullname', fullname);
  formData.append('file', file);
  formData.append('statement',paymentMethod)

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
