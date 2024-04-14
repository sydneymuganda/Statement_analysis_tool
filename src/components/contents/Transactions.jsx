import React from "react";
import { data2,data } from '../../Data/data';
import { dateSplicer,numberEdit } from "../../Data/functions";
import { Dchart } from "../Charts.jsx/Doghnut";
import '../../styles/pages.css';
import {useLocation} from 'react-router-dom'
//agent transactions
const Moneytransactions =()=>{
  const location=useLocation();
  var data=data2;
  if (location.state!==null){ data= JSON.parse(location.state.response)};
    const labels=['Agent withdrawal', 'Agent Deposit']
    const Chartdata1={
      labels:labels,
      datasets:[{
        label:'total amount ',
        data:[(data.agent_withdraw_summary.total_amount_withdrawn_via_agent),
          (data.agent_deposit_summary.total_amount_deposited)
         
          ]
      }],
      backgroundColor:['blue','white']
      ,
      circumference:180,
      rotation:270,
      
      };
      const Chartdata2={
        labels:labels,
        datasets:[{
          label:'average amount ',
          data:[(data.agent_withdraw_summary.average_amount_withdrawn),
            (data.agent_deposit_summary.average_amount_deposited)
           
            ]
        }],
        backgroundColor:['blue','white']
        ,
        circumference:180,
        rotation:270,
        
        };
    return(
       <div className="transaction-container">
        
        
        <div className="banking-table">

        <h2> Agent Transfer  Analysis</h2>

       <table>

           
           <tr>
               <th colSpan={4}> Money Withdrawn</th>
           </tr>
           <tr>
           <th> last date  </th>
           <th> max amount</th>
           <th> number of times transacted</th>
           
           <th> last amount</th>
           </tr>

           <tr>
           <td> {dateSplicer(data.agent_withdraw_summary.last_date_of_withdrawal_via_agent)}</td>
           <td>{numberEdit(data.agent_withdraw_summary.max_amount_withdrawn_via_agent)}</td>
           <td>{data.agent_withdraw_summary.number_of_times_withdrawn}</td>
           <td>{numberEdit(data.agent_withdraw_summary.last_amount_of_withdrawn_via_agent)}</td>

           </tr>
           
           </table>

    

           <table>

          
           <tr>
               <th colSpan={4}> Money Deposited</th>
           </tr>
           <tr>
           <th> last date bought </th>
           <th> max amount</th>
           <th> number of times purchased</th>
           
           <th> last amount</th>
           </tr>

           <tr>
           <td> {dateSplicer(data.agent_deposit_summary.last_date_deposited)}</td>
           <td>{numberEdit(data.agent_deposit_summary.max_amount_deposited)}</td>
           <td>{data.agent_deposit_summary.number_of_times_deposited}</td>
           <td>{numberEdit(data.agent_deposit_summary.last_amount_deposited)}</td>

           </tr>
           
           </table>
           </div>

           <div className="charts">

               <div className="chart-average" >{Dchart(Chartdata1,'total ')}</div > 
               <div className="chart-total">{Dchart(Chartdata2,'average')}</div >
           </div>
      </div>
   
      
   )

     



};

export default Moneytransactions;