import React from "react";
import { data2,data } from '../../Data/data';
//agent transactions
const Moneytransactions =()=>{

    return(
       <div className="transaction-container">
        
        
        <div className="table03">

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
           <td> {data.agent_withdraw_summary.last_date_of_withdrawal_via_agent}</td>
           <td>{data.agent_withdraw_summary.max_amount_withdrawn_via_agent}</td>
           <td>{data.agent_withdraw_summary.number_of_times_withdrawn}</td>
           <td>{data.agent_withdraw_summary.last_amount_of_withdrawn_via_agent}</td>

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
           <td> {data.agent_deposit_summary.last_date_deposited}</td>
           <td>{data.agent_deposit_summary.max_amount_deposited}</td>
           <td>{data.agent_deposit_summary.number_of_times_deposited}</td>
           <td>{data.agent_deposit_summary.last_amount_deposited}</td>

           </tr>
           
           </table>
           </div>

           <div className="charts">

               <h2>chart</h2> <br />
               <h2>chart</h2>
           </div>
      </div>
   
      
   )

     



};

export default Moneytransactions;