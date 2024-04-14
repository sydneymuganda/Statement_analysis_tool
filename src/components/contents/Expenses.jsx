import React from "react";
import { data2 } from '../../Data/data';
import { dateSplicer,numberEdit } from "../../Data/functions";
import { Dchart } from "../Charts.jsx/Doghnut";
import '../../styles/pages.css';
import {useLocation} from 'react-router-dom'

// for bill transactions
const Expenses =()=>{
  const location=useLocation();
  var data=data2;
  if (location.state!==null){ data= JSON.parse(location.state.response)};
    const labels=['LUKU','LIPA SUMMARY','BILL PAYMENTS']
    const Chartdata1={
      labels:labels,
      datasets:[{
        label:'average amount ',
        data:[(data.Luku_Summary.average_amount_bought_luku),
          (data.lipa_summary.average_lipa_amount),
          data.bill_payment_summary.average_bills_amount
         
          ]
      }],
      backgroundColor:['yellow','blue','white']
      ,
      circumference:180,
      rotation:270,
      
      };
      const Chartdata2={
        labels:labels,
        datasets:[{
          label:'total amount ',
          data:[(data.Luku_Summary.total_luku_amount),
            (data.lipa_summary.total_amount_paid_via_lipa),
            data.bill_payment_summary.total_amount_paid_bills
           
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
            <td> {dateSplicer(data.Luku_Summary.last_date_bought_luku)}</td>
            <td>{data.Luku_Summary.number_of_times_bought_luku}</td>
            <td>{numberEdit(data.Luku_Summary.max_amount_bought_luku)}</td>
            <td>{numberEdit(data.Luku_Summary.last_amount_bought_luku)}</td>

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
            <td> {dateSplicer(data.bill_payment_summary.last_date_paid_bills)}</td>
            <td>{data.bill_payment_summary.number_of_times_bills_paid}</td>
            <td>{numberEdit(data.bill_payment_summary.max_amount_paid_bills)}</td>
            <td>{numberEdit(data.bill_payment_summary.last_amount_paid_bills)}</td>

            </tr>
            
            </table>

            <table>

           
            <tr>
                <th colSpan={4}> LIPA summary</th>
            </tr>
            <tr>
            <th> last date bought </th>
            <th> number of times purchased</th>
            <th> max amount</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.lipa_summary.last_date_paid_via_lipa)}</td>
            <td>{data.lipa_summary.number_of_times_paid_via_lipa}</td>
            <td>{numberEdit(data.lipa_summary.max_amount_paid_via_lipa)}</td>
            <td>{numberEdit(data.lipa_summary.last_amount_paid_via_lipa)}</td>

            </tr>
            
            </table>
            </div>

            <div className="charts">

                <div className="chart-average">{Dchart(Chartdata1,'average usage')}</div> 
                <div className="chart-total">{Dchart(Chartdata2,'total usage')}</div>
            </div>
       </div>
    )



};

export default Expenses;