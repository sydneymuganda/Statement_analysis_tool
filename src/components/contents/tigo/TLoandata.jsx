import React from 'react';
import { Tdata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';
import { Dchart } from '../../Charts.jsx/Doghnut';
import {useLocation} from 'react-router-dom'
// for bill transactions
const TLoandata =()=>{
    const location=useLocation();
    var data=Tdata;
    if (location.state!==null ){ data= JSON.parse(location.state.response)}
    return(
       <div className="expenses-container">
         <div className="banking-table">

         <h2> Loan Analysis</h2>

        <table>

            
            <tr>
                <th colSpan={6}> Butisha</th>
            </tr>
            <tr>
            <th> total amount repaid </th>
            <th> max amount repaid</th>
            <th> number of times repaid</th>
            <th> average amount repaid</th>
            <th> last date borrowed</th>
            
            </tr>

            <tr>
            <td>{numberEdit(data.bustisha.Total_amount_repaid)}</td>
            <td>{numberEdit(data.bustisha.Maximum_amount_repaid)}</td>
            
            <td>{data.bustisha.Number_of_times_repaid}</td>
            <td>{numberEdit(data.bustisha.Average_amount_repaid_in_the_time_period)}</td>
            <td> {dateSplicer(data.bustisha.Last_day_repaid)}</td>
            
            

            </tr>

           
            
            </table>

            

            </div>

           
       </div>
    )



};

export default TLoandata;