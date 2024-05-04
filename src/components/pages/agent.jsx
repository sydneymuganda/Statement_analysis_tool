import React from 'react';

import Moneytransactions from '../contents/voda/Transactions';
import TMoneytransactions from '../contents/tigo/TTransactions';
import "C:/Users/User/Desktop/frontend/dashBoard/src/styles/pages.css";

const Agent = () => {
  var payMethod=localStorage.getItem('paymentMethod')

  
  if (payMethod===null|| payMethod==='Mpesa'){
    return (  <Moneytransactions /> );
  }else if (payMethod==='Tigopesa'){
    return (  <TMoneytransactions /> );
  }
}

export default Agent;