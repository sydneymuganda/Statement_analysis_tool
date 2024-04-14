
import React ,{useState} from 'react';
import { FaUser } from "react-icons/fa";
import { ImFilesEmpty } from "react-icons/im";
import { FiUpload } from "react-icons/fi";
import '../../styles/login.css';
import { useNavigate } from 'react-router';
import { data,APIcall,APIcall2 } from '../../Data/data';
import { testCall } from '../../Data/data';
import { uploadPdf ,AxiosPdf} from '../../Data/functions';
import axios from 'axios';
const apikey=import.meta.env.VITE_APIKEY;




const Login=()=>{
  console.log(apikey);
 const navigate = useNavigate();
 const [username, setUsername] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [file, setFile] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  // console.log(process.env)
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
   
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !paymentMethod || !file || !termsAccepted) {
      console.error('Please fill in all required fields.');
      return; // Exit early if any required field is missing
    }

    // const formData = new FormData();
    // formData.append('fullname', username);
    // formData.append('file', file);
    // try {
    //     const response = await axios.post('http://localhost:5000/api/upload_pdf', formData);
    //     navigate('/cashflow',{replace:true,state:{username,file}});
    //     console.log('API response:', response.data);
    //     // Handle response as needed
    // } catch (error) {
    //     console.error('Error uploading PDF:', error);
    // }
    try {
      const response = await AxiosPdf(username, file);
      console.log('API response:', response);
        
     navigate('/cashflow',{replace:true,state:{username,file,response}});
      // Redirect or handle response as needed
    } catch (error) {
      console.error('Error uploading PDF:', error);
      // Handle error
    };


  

  };

  return (
    <div className='login'>
      <h2>Login Portal</h2>
      <form onSubmit={handleSubmit}>

        <div className='username'>
          <label>Username:</label>
          <input type="text" value={username} placeholder='Username' onChange={handleUsernameChange} />
          <FaUser className='login-icon' />
        </div>

        <div className='statement-type'>

          <label>Bank Statement:</label>
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">Select bank statement type</option>
            <option value="Mpesa">Mpesa</option>
            <option value="Tigopesa">Tigopesa</option>
            <option value="Halopesa">Halopesa</option>
          </select>
          <ImFilesEmpty className='login-icon' />
        </div>

        <div className='upload'>
          <label>Upload Statement:</label>
          <input type="file" onChange={handleFileChange} />
          <FiUpload className='login-icon' />
        </div>
        <div className='Ts&Cs'> 
          <label>
            <input type="checkbox" checked={termsAccepted} onChange={handleTermsChange} />
            I accept the terms and conditions
          </label>
        </div>
        <button type="submit" disabled={!username || !paymentMethod || !file || !termsAccepted} >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;