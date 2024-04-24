import React from 'react';
import { Adata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';

// for bill transactions
const ALoandata =()=>{
  
    var data=Adata;
    
    return(
       <div className="expenses-container">
         <div className="banking-table">

         <h2> Loan Analysis</h2>

        <table>

            
            <tr>
                <th colSpan={6}> KAMILISHA</th>
            </tr>
            <tr>
            <th> Total Amount Disbursed </th>
            <th> Max Amount Repaid</th>
            <th> Number of Loans Disbursed</th>
            <th> Last Amount Loaned</th>
            <th> Last Date Borrowed</th>
            <th> Last Date Repaid</th>
            
            </tr>

            <tr>
            <td>{numberEdit(data.kamilisha.total_Amount_Disbursed)}</td>
            <td>{numberEdit(data.kamilisha.total_amount_Repaid)}</td>
            <td>{numberEdit(data.kamilisha.number_of_Loans_disbursed)}</td>
            
            <td>{numberEdit(data.kamilisha.last_loan_amount)}</td>
            <td>{numberEdit(data.kamilisha.last_day_repaid)}</td>
            <td> {dateSplicer(data.kamilisha.last_day_repaid)}</td>
            
            

            </tr>

           
            
            </table>

            

            </div>

           
       </div>
    )



};

export default ALoandata;