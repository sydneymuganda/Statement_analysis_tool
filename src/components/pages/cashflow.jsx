import React from 'react';
import { useLocation } from 'react-router';
import "C:/Users/User/Desktop/frontend/dashBoard/src/styles/pages.css";
import CashAnalysis from '../contents/CashAnalysis';
    

const Cashflow = () => {
  const location=useLocation();
  console.log(location)
  return (
    <CashAnalysis />
  );
};

export default Cashflow;