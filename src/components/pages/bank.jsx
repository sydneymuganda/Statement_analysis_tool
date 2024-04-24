import React from 'react';


import "C:/Users/User/Desktop/frontend/dashBoard/src/styles/pages.css";
import Banking from '../contents/voda/Banking';
import TBanking from '../contents/tigo/TBanking';
const Bank = () => {
  
  var payMethod=localStorage.getItem('paymentMethod')
  
  
if (payMethod===null|| payMethod==='Mpesa'){
  return (  <Banking /> );
}else if (payMethod==='Tigopesa'){
  return (  <TBanking /> );
}

};

export default Bank;