import React from 'react';
import { Hdata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';
import { Dchart } from '../../Charts.jsx/Doghnut';

// for bill transactions
const HLoandata =()=>{

    var data=Hdata;
  
    return(
       <div className="expenses-container">
         <div className="banking-table">

         <h2> Loan Analysis</h2>

        <table>

            
            <tr>
                <th colSpan={6}> Loans</th>
            </tr>
            <tr>
            <th> total amount repaid </th>
            <th> max amount repaid</th>
            <th> number of times repaid</th>
            <th> average amount repaid</th>
            <th> last date borrowed</th>
            
            </tr>

            <tr>
            <td>{'N/A'}</td>
            <td>{'N/A'}</td>
            
            <td>{'N/A'}</td>
            <td>{'N/A'}</td>
            <td> {'N/A'}</td>
            
            

            </tr>

           
            
            </table>

            

            </div>

           
       </div>
    )



};

export default HLoandata;