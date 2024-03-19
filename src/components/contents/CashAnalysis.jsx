import React from 'react';

import { data2,data } from '../../Data/data';
import '../../styles/pages.css';
import { IoMdArrowRoundForward } from "react-icons/io";

const CashAnalysis = () => {
    return (
        <div>
      <div id='message01' className='message'> 
        <h1>hello <br /> jane Doe</h1>
        
      </div>

      <div id='time01' className="date">
        <h1>Statement Analysis from:</h1> <br />
        <h2> {data.info.start_date} <IoMdArrowRoundForward/>  {data.info.end_date} </h2>
      </div>

      <div id='balance01' className="balance">
      <h1>available balance :</h1> <br />
        <h2> {data.profile.current_wallet_balance} </h2>
      </div>

      <div id='details01' className="details">

        <h1>active days :</h1> <br />
        <h2> {data.info.total_days} </h2>
        <h1>active transacting days :</h1> <br />
        <h2> {data.info.total_active_days} </h2>
        <h1> number of transaction made :</h1> <br />
        <h2> {data.profile.number_of_transactions} </h2>



      </div>
      <div id='chart01' className="chart">
        <h1>Chart usage</h1>
        <h1>Turnover from Transactions</h1>
        {data.profile.turnover}
      </div>
      
      <div id='table01' className="table">
       <table className='analysis_table'>

       <caption> Cash Flow Analysis</caption>

       <tr>
        <th> Cash inflow</th>
        <th> turnover %</th>
        <th> Total transactions</th>
        <th> Ratio %</th>
       </tr>

       <tr>
        <td> {data.cashin_flow['total_cash-in_flow']}</td>
        <td>{data.cashin_flow['cash-in_flow_to_turnover_percentage']}</td>
        <td>{data.cashin_flow['cash-in_flow_transactions']}</td>
        <td>{data.cashin_flow['cash-in_trans_to_total_trans_percentage']}</td>

       </tr>

       <tr>
        <th> Cash outflow</th>
        <th> turnover %</th>
        <th> Total transactions</th>
        <th> Ratio %</th>
       </tr>

       <tr>
        <td> {data.cashout_flow['Total_cash-out_flow']}</td>
        <td>{data.cashout_flow['Cash-out_flow_to_turnover_percentage']}</td>
        <td>{data.cashout_flow['Cash-out_flow_transactions']}</td>
        <td>{data.cashout_flow['Cash-out_trans_to_total_trans_percentage']}</td>

       </tr>

       </table>

      </div>
        
      </div>
     
      
    );
  };
  
 

export default CashAnalysis;