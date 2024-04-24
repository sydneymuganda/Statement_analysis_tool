import React from 'react';
import { Hdata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';
import { Dchart } from '../../Charts.jsx/Doghnut';


const HBanking = () => {

  var data=Hdata;
 
  const labels=['B2W','W2B']
  const Chartdata1={
    labels:labels,
    datasets:[{
      label:'amount transfered',
      data:[(data.b2w.total_amount_transferred_from_bank_to_wallet),
        (data.w2b.total_amount_transferred_from_wallet_to_bank),
       
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
        data:[(data.b2w.number_of_times_transferred_from_bank_to_wallet),
          (data.w2b.number_of_times_trasnferred_from_wallet_to_bank),
         
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
            <td> {numberEdit(data.b2w.maximum_amount_transferred_from_bank_to_wallet)}</td>
            <td>{numberEdit(data.b2w.average_amount_transferred_from_bank_to_wallet)}</td>
            <td>{dateSplicer(data.b2w.last_time_transferred_from_bank_to_wallet)}</td>
            
 
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
           <td> {numberEdit(data.w2b.maximum_amount_transferred_from_wallet_to_bank)}</td>
            <td>{numberEdit(data.w2b.average_amount_transferred_from_wallet_to_bank)}</td>
            <td>{dateSplicer(data.w2b.last_time_transferred_from_wallet_to_bank)}</td>

            </tr>

            </table>
            </div>

            </div>
      </div>
    );
  };
  
  export default HBanking;