import React from 'react';
import "C:/Users/User/Desktop/frontend/dashBoard/src/styles/pages.css";
import CashAnalysis from '../contents/CashAnalysis';
    //   {/* <CustomerData data={data} /> */}
const CustomerData = ({ data }) => {
    return (
      <div className='cover'>
        <h2 className='title'> Customer Profile</h2>
        <ul className='list'>
          <li className='listItem'>Wallet Balance (TZS): {data.walletBalance}</li>
          <li className='listItem'>
            Turnover From Transactions Occurred (TZS): {data.turnover} ({data.transactionCount})
          </li>
        </ul>
  
        <h2 className='title'>Cash Flow Analysis</h2>
        <ul className='list'>
          <li className='listItem'>Number of Transactions Made: {data.cashFlow.transactions}</li>
          <li className='listItem'>
            Total Cash Inflow (TZS) {data.cashFlow.inflow.amount} ({data.cashFlow.inflow.transactions})
          </li>
          <li className='listItem'>Cash Inflow to Turnover Percentage: {data.cashFlow.inflow.percentage}%</li>
          <li className='listItem'>
            Total Cash Outflow (TZS) {data.cashFlow.outflow.amount} ({data.cashFlow.outflow.transactions})
          </li>
          <li className='listItem'>Cash Outflow to Turnover Percentage: {data.cashFlow.outflow.percentage}%</li>
        </ul>
  
        <h2 className='title'>Loan Data Analysis</h2>
        <ul className='list'>
          <li className='listItem'>Total loans: {data.loans.total}</li>
          <li className='listItem'>Songesha Disbursements (TZS): {data.loans.disbursements}</li>
          <li className='listItem'>Total Amount Repaid (TZS): {data.loans.repaid}</li>
          <li className='listItem'>Ratio of Loans Disbursed to Repaid: {data.loans.disbursementToRepaidRatio}%</li>
        </ul >
      </div>
    );
  };
  
  const data = {
   walletBalance: 123456,
    turnover: 1234567,
    transactionCount: 12,
    cashFlow: {
      transactions: 12,
      inflow: {
        amount: 123456,
        transactions: 6,
        percentage: 50,
      },
      outflow: {
        amount: 123456,
        walletBalance: 123456,
        transactions: 6,
        percentage: 50,
      },
    },
    loans: {
      total: 12,
      disbursements: 123456,
      repaid: 123456,
      dis12bursementToRepaidRatio: 50,
    },
  };

const Cashflow = () => {
  return (
    <CashAnalysis />
  );
};

export default Cashflow;