import React from 'react';
import { Tdata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';
import { Dchart } from '../../Charts.jsx/Doghnut';
import {useLocation} from 'react-router-dom'

// for bill transactions
const TExpenses =()=>{
    const location=useLocation();
    var data=Tdata;
  if (location.state!==null){ data= JSON.parse(location.state.response)};
    const labels=['LUKU','AIRTIME TOPUP','BILL PAYMENTS']
    const Chartdata1={
      labels:labels,
      datasets:[{
        label:'total amount ',
        data:[(data.luku.Total_amount_used_to_buy_luku),
          (data.airtime_topup.total_amount_toped_up_airtime),
          data.bill.total_amount_used_to_pay_bill
         
          ]
      }],
      backgroundColor:['yellow','blue','white']
      ,
      circumference:180,
      rotation:270,
      
      };
      
    
    return(
       <div className="expenses-container">
         <div className="banking-table">

         <h2> Bill Analysis</h2>

        <table>

            
            <tr>
                <th colSpan={4}> LUKU</th>
            </tr>
            <tr>
            <th> last date bought </th>
            <th> number of times purchased</th>
            <th> max amount</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.luku.Last_time_bought_luku)}</td>
            <td>{data.luku.Number_of_times_bought_luku}</td>
            <td>{numberEdit(data.luku.Maximum_amount_used_to_buy_luku)}</td>
           

            </tr>
            
            </table>

            <table>

         
            <tr>
                <th colSpan={4}> Bill payment</th>
            </tr>
            <tr>
            <th> last date bought </th>
            <th> number of times purchased</th>
            <th> max amount</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.bill.last_time_paid_bill)}</td>
            <td>{data.bill.Number_of_times_paid_bill}</td>
            <td>{numberEdit(data.bill.maximum_amount_used_to_pay_bill)}</td>
            <td>{numberEdit(data.bill.last_time_paid_bill)}</td>

            </tr>
            
            </table>

            <table>

           
            <tr>
                <th colSpan={4}> AIRTIME summary</th>
            </tr>
            <tr>
            <th> last date bought </th>
            <th> number of times purchased</th>
            <th> max amount</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.airtime_topup.last_time_toped_up_airtime)}</td>
            <td>{data.airtime_topup.number_of_times_toped_up_airtime}</td>
            <td>{numberEdit(data.airtime_topup.maximum_amount_toped_up_airtime)}</td>
            

            </tr>
            
            </table>
            </div>

            <div className="charts">

                <div className="chart-average">{Dchart(Chartdata1,'average usage')}</div> 
                
            </div>
       </div>
    )



};

export default TExpenses;