import React from "react";
import { data2,data } from '../../Data/data';
// for p2p or b2b transactions
const Money =()=>{

    return(
       <div className="money-container">
        
         <div className="table02">

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
            <td> {data.money_sent_p2p_summary.last_date_of_money_sent_to_peer}</td>
            <td>{data.money_sent_p2p_summary.max_amount_sent_to_peer}</td>
            <td>{data.money_sent_p2p_summary.number_of_times_sent_to_peer}</td>
            <td>{data.money_sent_p2p_summary.last_amount_sent_to_peer}</td>

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
            <td> {data.money_received_p2p_or_business.last_date_of_money_received_from_peer_or_business}</td>
            <td>{data.money_received_p2p_or_business.max_amount_received_from_peer_or_business}</td>
            <td>{data.money_received_p2p_or_business.number_of_times_received_from_peer_or_business}</td>
            <td>{data.money_received_p2p_or_business.last_amount_received_from_peer_or_business}</td>

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

export default Money;