import React from 'react';
import { useLocation } from 'react-router';
import "C:/Users/User/Desktop/frontend/dashBoard/src/styles/pages.css";
import CashAnalysis from '../contents/voda/CashAnalysis';
import TCashAnalysis from '../contents/tigo/TCashanalysis';
import HCashAnalysis from '../contents/halotel/HCashanalysis';
import ACashAnalysis from '../contents/airtel/ACashanalysis';
    

const Cashflow = () => {
  var payMethod=localStorage.getItem('paymentMethod')

  
  if (payMethod===null|| payMethod==='Mpesa'){
    return (  <CashAnalysis /> );
  }else if (payMethod==='Tigopesa'){
    return (  <TCashAnalysis /> );
  }else if (payMethod==='Halopesa'){
    return (  <HCashAnalysis /> );
 }else if (payMethod==='Airtelmoney'){
   return (  <ACashAnalysis /> );
 }
  
};

export default Cashflow;