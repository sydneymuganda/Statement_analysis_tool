import React from 'react';
import { Adata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';
import { Dchart } from '../../Charts.jsx/Doghnut';


//agent transactions
const AMoneytransactions =()=>{
   
    var data=Adata;
 
    const labels=['Agent withdrawal', 'Agent Deposit']
    const Chartdata1={
      labels:labels,
      datasets:[{
        label:'total amount ',
        data:[(data.agent_withdraw.total_amount_withdrawn_via_agent),
          (data.agent_deposit.total_amount_deposited)
         
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
          data:[(data.agent_withdraw.average_amount_withdrawn),
            (data.agent_deposit.average_amount_deposited)
           
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
           <td> {dateSplicer(data.agent_deposit.last_day_deposited)}</td>
           <td>{numberEdit(data.agent_deposit.max_amount_deposited)}</td>
           <td>{data.agent_deposit.number_of_times_deposited} </td>
           <td>{numberEdit(data.agent_deposit.last_amount_deposited)}</td>
           

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

export default AMoneytransactions;