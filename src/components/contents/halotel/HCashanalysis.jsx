import React from 'react';
import {useLocation} from 'react-router-dom'
import { Hdata } from '../../../Data/data';
import '../../../styles/pages.css';
import { IoMdArrowRoundForward } from "react-icons/io";
import { Dchart } from '../../Charts.jsx/Doghnut';

import { numberEdit,dateSplicer } from '../../../Data/functions';

const HCashAnalysis = () => {

  var data=Hdata;
 
  
  const labels=['Banking','Merchant Paymets','Luku','agent_transactions','money_transfers']
  const Chartdata={
    labels:labels,
    datasets:[{
      label:'usage',
      data:[(data.b2w.total_amount_transferred_from_bank_to_wallet+data.w2b.total_amount_transferred_from_wallet_to_bank),
        (data.merchant_payments.total_amount_paid),
        data.luku.total_amount_used_to_buy_luku,
        ,data.agent_withdraw.total_amount_withdrawn_via_agent+data.agent_deposit.total_amount_deposited,
        data.money_sent_p2p.total_amount_sent_to_peer+data.money_received_p2p.total_amount_received_from_peer,
        ]
    }],
    backgroundColor:['blue','green','purple','red','black','yellow']
    ,
    };


    return (
     

    <div className='page'> 
    
        <div className="left">

           <div  className='message'> 

               <h3 ><b>hello <br />  {localStorage.getItem('username')===null? "jane doe" :localStorage.getItem('username')}</b></h3>
               <h3 ><b>Number: <br /> {data.info.owners_number} </b></h3>
        
        </div>


        <div  className="balance">
           <h3 className='balance-title'>available balance :</h3> <br />
           <h3 className='balance-number'> {data.profile.current_balance} </h3>
        </div>

      </div>

      <div className="middle">

           <div id='time01' className="date">

          <h3>Statement Analysis from:</h3> <br />
          <h3> {dateSplicer(data.info.start_date)} <IoMdArrowRoundForward/>  {dateSplicer(data.info.end_date)} </h3>

          </div> <br />

    

         <div id='details01' className="details">

        <h3>active days : <br />
         {data.info.total_days} </h3> <br />

        <h3>active transacting days : <br />
         {data.info.total_active_days} </h3> <br />

        <h3> number of transaction made : <br />
         {data.profile.number_of_transactions} </h3>  <br />

        </div>

      </div>

      <div className="right">

          <div id='chart01' className="chart">

            
        
          {Dchart(Chartdata,"usage chart",false)}

          <br />
          
          <h3>Turnover from Transactions <br />
          {numberEdit(data.profile.turnover)} </h3>

      </div>

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
        <td> {numberEdit(data.cashin_flow['total_cash-in_flow'])}</td>
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
        <td> {numberEdit(data.cashout_flow['Total_cash-out_flow'])}</td>
        <td>{data.cashout_flow['Cash-out_flow_to_turnover_percentage']}</td>
        <td>{data.cashout_flow['Cash-out_flow_transactions']}</td>
        <td>{data.cashout_flow['Cash-out_trans_to_total_trans_percentage']}</td>

       </tr>

       </table>
       </div>
       
      </div>
        
      
     
      
    );
  };
  
 

export default HCashAnalysis;