
import React ,{useState} from 'react';

const Login=()=>{
const [username, setUsername] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [file, setFile] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your validation logic here before submission
    console.log('Submitted:', { username, paymentMethod, file, termsAccepted });
  };

  return (
    <div className='login'>
      <h2>Login Portal</h2>
      <form onSubmit={handleSubmit}>
        <div className='username'>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Bank Statement:</label>
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">Select bank statement type</option>
            <option value="Mpesa">Mpesa</option>
            <option value="Tigopesa">Tigopesa</option>
            <option value="Halopesa">Halopesa</option>
          </select>
        </div>
        <div>
          <label>Upload Statement:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <label>
            <input type="checkbox" checked={termsAccepted} onChange={handleTermsChange} />
            I accept the terms and conditions
          </label>
        </div>
        <button type="submit" disabled={!username || !paymentMethod || !file || !termsAccepted}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;