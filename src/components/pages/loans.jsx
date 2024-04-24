import React from 'react';
import Loandata from '../contents/voda/Loandata';
import TLoandata from '../contents/tigo/TLoandata';
import HLoandata from '../contents/halotel/HLoandata';
import ALoandata from '../contents/airtel/ALoandata';
const Loans = () => {
  var payMethod=localStorage.getItem('paymentMethod')
  
  
if (payMethod===null|| payMethod==='Mpesa'){
  return (  <Loandata /> );
}else if (payMethod==='Tigopesa'){
  return (  <TLoandata /> );
}else if (payMethod==='Halopesa'){
  return (  <HLoandata /> );
}else if (payMethod==='Airtelmoney'){
 return (  <ALoandata /> );
}

};

export default Loans;