import React from "react";
import { data2,data } from '../../Data/data';
import { dateSplicer,numberEdit } from "../../Data/functions";
import { Dchart } from "../Charts.jsx/Doghnut";
import '../../styles/pages.css';
import {useLocation} from 'react-router-dom'
// for p2p or b2b transactions
const Money =()=>{
  const location=useLocation();
  var data=data2;
  if (location.state!==null){ data= JSON.parse(location.state.response)};
    const labels=['Money sent', ' Money recieved']
    const Chartdata1={
      labels:labels,
      datasets:[{
        label:'total amount ',
        data:[(data.agent_withdraw_summary.total_amount_withdrawn_via_agent),
          (data.agent_deposit_summary.total_amount_deposited)
         
          ]
      }],
      backgroundColor:['red','green']
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
        
       <div className="money-container">
        
         <div className="banking-table">

         <h2> Money Transfer  Analysis</h2>

        <table>

            
            <tr>
                <th colSpan={4}> Money sent</th>
            </tr>
            <tr>
            <th> last date  </th>
            <th> max amount</th>
            <th> number of times transacted</th>
            
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.money_sent_p2p_summary.last_date_of_money_sent_to_peer)}</td>
            <td>{data.money_sent_p2p_summary.max_amount_sent_to_peer}</td>
            <td>{numberEdit(data.money_sent_p2p_summary.number_of_times_sent_to_peer)}</td>
            <td>{numberEdit(data.money_sent_p2p_summary.last_amount_sent_to_peer)}</td>

            </tr>
            
            </table>

     

            <table>

           
            <tr>
                <th colSpan={4}> Money recieved</th>
            </tr>
            <tr>
            <th> last date bought </th>
            <th> max amount</th>
            <th> number of times purchased</th>
            
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.money_received_p2p_or_business.last_date_of_money_received_from_peer_or_business)}</td>
            <td>{data.money_received_p2p_or_business.max_amount_received_from_peer_or_business}</td>
            <td>{numberEdit(data.money_received_p2p_or_business.number_of_times_received_from_peer_or_business)}</td>
            <td>{numberEdit(data.money_received_p2p_or_business.last_amount_received_from_peer_or_business)}</td>

            </tr>
            
            </table>
            </div>

            <div className="charts">

                <div className="chart-total" >{Dchart(Chartdata1,'total sent&recieved')}</div> 
                <div className="chart-average" >{Dchart(Chartdata2,'total average sent&recieved')}</div>
            </div>
       </div>
    
       
    )



};

export default Money;