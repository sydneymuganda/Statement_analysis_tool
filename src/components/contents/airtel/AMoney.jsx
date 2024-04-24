import React from 'react';
import { Adata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';
import { Dchart } from '../../Charts.jsx/Doghnut';

// for p2p or b2b transactions
const AMoney =()=>{
    
    var data=Adata;
 
    const labels=['Money sent', ' Money recieved']
    const Chartdata1={
      labels:labels,
      datasets:[{
        label:'total amount ',
        data:[(data.money_sent_p2p.total_amount_sent_to_peer),
          (data.money_received_p2p.total_amount_received_from_peer)
         
          ]
      }],
      backgroundColor:['red','green']
      ,
      
      
      };
      const Chartdata2={
        labels:labels,
        datasets:[{
          label:'average amount ',
          data:[(data.money_sent_p2p.average_amount_sent_to_peer),
            (data.money_received_p2p.average_amount_received_from_peer)
           
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
            <td> {dateSplicer(data.money_sent_p2p.last_day_sent_to_peer)}</td>
            <td>{data.money_sent_p2p.max_amount_sent_to_peer}</td>
            <td>{numberEdit(data.money_sent_p2p.number_of_times_sent_to_peer)}</td>
            

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
            <td> {dateSplicer(data.money_received_p2p.last_amount_received_from_peer)}</td>
            <td>{data.money_received_p2p.max_amount_received_from_peer}</td>
            <td>{numberEdit(data.money_received_p2p.number_of_times_received_from_peer)}</td>
            

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

export default AMoney;