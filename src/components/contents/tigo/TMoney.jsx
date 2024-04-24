import React from 'react';
import { Tdata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';
import { Dchart } from '../../Charts.jsx/Doghnut';
import {useLocation} from 'react-router-dom'
// for p2p or b2b transactions
const TMoney =()=>{
    const location=useLocation();
    var data=Tdata;
  if (location.state!==null){ data= JSON.parse(location.state.response)};
    const labels=['Money sent', ' Money recieved']
    const Chartdata1={
      labels:labels,
      datasets:[{
        label:'total amount ',
        data:[(data.P2P.total_amount_sent_to_peer),
          (data.received_money.total_amount_received_from_peer)
         
          ]
      }],
      backgroundColor:['red','green']
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
            
            
            </tr>

            <tr>
            <td> {dateSplicer(data.P2P.last_time_sent_to_peer)}</td>
            <td>{data.P2P.maximum_amount_sent_to_peer}</td>
            <td>{numberEdit(data.P2P.Number_of_times_sent_to_peer)}</td>
            

            </tr>
            
            </table>

     

            <table>

           
            <tr>
                <th colSpan={4}> Money recieved</th>
            </tr>
            <tr>
            <th> last date recieved </th>
            <th> max amount</th>
            <th> number of times recieved</th>
            
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.received_money.last_time_received_from_peer)}</td>
            <td>{data.received_money.maximum_amount_received_from_peer}</td>
            <td>{numberEdit(data.received_money.number_of_times_received_from_peer)}</td>
            

            </tr>
            
            </table>
            </div>

            <div className="charts">

                <div className="chart-total" >{Dchart(Chartdata1,'total sent&recieved')}</div> 
              
            </div>
       </div>
    
       
    )



};

export default TMoney;