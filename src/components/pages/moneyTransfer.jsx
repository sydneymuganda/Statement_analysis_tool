import React from "react";
import Money from "../contents/voda/Money";
import TMoney from "../contents/tigo/TMoney";
import HMoney from "../contents/halotel/HMoney";
import AMoney from "../contents/airtel/AMoney";

import "C:/Users/User/Desktop/frontend/dashBoard/src/styles/pages.css";

const Transfers =()=>{
  var payMethod=localStorage.getItem('paymentMethod')
  if (payMethod===null|| payMethod==='Mpesa'){
    return (  <Money /> );
  }else if (payMethod==='Tigopesa'){
    return (  <TMoney /> );
  }else if (payMethod==='Halopesa'){
    return (  <HMoney /> );
 }else if (payMethod==='Airtelmoney'){
   return (  <AMoney /> );
 }else{
  return (  <Money /> );
 }


}

export default Transfers;