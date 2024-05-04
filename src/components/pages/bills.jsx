import React from 'react';

import "C:/Users/User/Desktop/frontend/dashBoard/src/styles/pages.css";
import Expenses from '../contents/voda/Expenses';
import TExpenses from '../contents/tigo/TExpenses';
import AExpenses from '../contents/airtel/AExpenses';
import HExpenses from '../contents/halotel/HExpenses';

const Bills = () => {
  var payMethod=localStorage.getItem('paymentMethod')
  
  
  if (payMethod===null|| payMethod==='Mpesa'){
    return (  <Expenses /> );
  }else if (payMethod==='Tigopesa'){
    return (  <TExpenses /> );
  }else if (payMethod==='Halopesa'){
     return (  <HExpenses /> );
  }else if (payMethod==='Airtelmoney'){
    return (  <AExpenses /> );
  }
  
  };

export default Bills;