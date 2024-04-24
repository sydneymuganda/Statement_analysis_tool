import React from 'react';
import { Tdata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';
import { Dchart } from '../../Charts.jsx/Doghnut';
import {useLocation} from 'react-router-dom'

//agent transactions
const TMoneytransactions =()=>{
    const location=useLocation();
    var data=Tdata;
  if (location.state!==null){ data= JSON.parse(location.state.response)};
    const labels=['Agent withdrawal', 'Agent Deposit']
    const Chartdata1={
      labels:labels,
      datasets:[{
        label:'total amount ',
        data:[(data.agent_withdraw.total_amount_withdrawn_via_agent),
          (data.money_deposit_via_agent.total_amount_deposited_via_agent)
         
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
          data:[(data.agent_withdraw.total_amount_withdrawn_via_agent/data.agent_withdraw.number_of_times_withdrawn_via_agent),
            (data.money_deposit_via_agent.average_amount_deposited_via_agent)
           
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
           <td> {dateSplicer(data.agent_withdraw.last_time_withdrawn_via_agent)}</td>
           <td>{numberEdit(data.agent_withdraw.maximum_amount_withdrawn_via_agent)}</td>
           <td>{data.agent_withdraw.number_of_times_withdrawn_via_agent}</td>
          

           </tr>
           
           </table>

    

           <table>

          
           <tr>
               <th colSpan={4}> Money Deposited</th>
           </tr>
           <tr>
           <th> last date Deposited </th>
           <th> max amount</th>
           <th> number of times deposited</th>
           
           <th> last amount</th>
           </tr>

           <tr>
           <td> {dateSplicer(data.money_deposit_via_agent.last_time_deposited_via_agent)}</td>
           <td>{numberEdit(data.money_deposit_via_agent.maximum_amount_deposited_via_agent)}</td>
           <td>{data.money_deposit_via_agent.number_of_times_deposited_via_agent}</td>
           

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

export default TMoneytransactions;