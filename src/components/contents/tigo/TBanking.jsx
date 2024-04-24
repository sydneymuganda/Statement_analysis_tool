import React from 'react';
import { Tdata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';
import { Dchart } from '../../Charts.jsx/Doghnut';
import {useLocation} from 'react-router-dom'

const TBanking = () => {
  const location=useLocation();
  var data=Tdata;
  if (location.state!==null){ data= JSON.parse(location.state.response)} 
  const labels=['B2W','W2B']
  const Chartdata1={
    labels:labels,
    datasets:[{
      label:'amount transfered',
      data:[(data.B2W.Total_amount_transferred_from_bank_to_wallet),
        (data.W2B.Total_amount_transferred_from_wallet_to_bank),
       
        ]
    }],
    backgroundColor:['green','orange']
    ,
    circumference:180,
    rotation:270,
    
    };
    const Chartdata2={
      labels:labels,
      datasets:[{
        label:'amount of times  transfered',
        data:[(data.B2W.Number_of_times_trasnferred_from_bank_to_wallet),
          (data.W2B.Number_of_times_trasnferred_from_wallet_to_bank),
         
          ]
      }],
      backgroundColor:['green','orange']
      ,
      circumference:180,
      rotation:270,
      
      };
    return (
      <div className='page '> 
      <div className='B-bottom'>
      <div   class="chart-section">
        
        {Dchart(Chartdata1,'total amount transfered')}
      </div>

      <div className='chart-section2'>
      {Dchart(Chartdata2,'number of times transfered')}
      </div>

      </div>
      <div className="B-bottom">
      <div className="B-table">
        
        <table className='banking-table'>  

            <caption> Banking Analysis</caption>
            <thead>
            <tr>
                <th colSpan={4}> {'Bank to Wallet (B2B)' }</th>
            </tr>
            </thead>
            
            <tr>
            <th> max</th>
            <th> average</th>
            <th> last transaction</th>
            <th> last amount</th>
            </tr>
            <tbody>
            <tr>
            <td> {numberEdit(data.B2W.Maximum_amount_transferred_from_bank_to_wallet)}</td>
            <td>{numberEdit(data.B2W.Average_amount_transferred_from_bank_to_wallet)}</td>
            <td>{dateSplicer(data.B2W.Last_time_transferred_from_bank_to_wallet)}</td>
            
 
            </tr>
            </tbody>
             <thead>
            <tr>
                <th colSpan={4}> {'wallet to bank (W2B)'}</th>
            </tr>
            </thead>
            <tr>
            <th> max</th>
            <th> average</th>
            <th> last transaction</th>
            <th> last amount</th>
            </tr>

            <tr>
           <td> {numberEdit(data.W2B.Maximum_amount_transferred_from_wallet_to_bank)}</td>
            <td>{numberEdit(data.W2B.Average_amount_transferred_from_wallet_to_bank)}</td>
            <td>{dateSplicer(data.W2B.Last_time_transferred_from_wallet_to_bank)}</td>

            </tr>

            </table>
            </div>

            </div>
      </div>
    );
  };
  
  export default TBanking;