import React from 'react';
import { data2 } from '../../Data/data';
import '../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../Data/functions';
import { Dchart } from '../Charts.jsx/Doghnut';
import {useLocation} from 'react-router-dom'

const Banking = () => {
  const location=useLocation();
  var data=data2;
  if (location.state!==null){ data= JSON.parse(location.state.response)} else{data=data2; };
  const labels=['CRDB','NMB']
  const Chartdata1={
    labels:labels,
    datasets:[{
      label:'amount transfered',
      data:[(data.CRDB_Summary.total_Amount_transfered_from_crdb_to_wallet),
        (data.NMB_Summary.average_amount_transfered_from_nmb_to_wallet),
       
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
        label:'amount transfered',
        data:[(data.CRDB_Summary.number_of_times_transfered_from_crdb_to_wallet),
          (data.NMB_Summary.number_of_times_transfered_from_nmb_to_wallet),
         
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
                <th colSpan={4}> CRDB</th>
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
            <td> {numberEdit(data.CRDB_Summary.max_amount_transfered_from_crdb_to_wallet)}</td>
            <td>{numberEdit(data.CRDB_Summary.average_amount_transfered_from_crdb_to_wallet)}</td>
            <td>{dateSplicer(data.CRDB_Summary.last_date_transferred_from_crdb)}</td>
            <td>{numberEdit(data.CRDB_Summary.last_amount_transferred_from_crdb_to_wallet)}</td>
 
            </tr>
            </tbody>
             <thead>
            <tr>
                <th colSpan={4}> NMB</th>
            </tr>
            </thead>
            <tr>
            <th> max</th>
            <th> average</th>
            <th> last transaction</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {numberEdit(data.NMB_Summary.max_amount_transfered_from_nmb_to_wallet)}</td>
            <td>{numberEdit(data.NMB_Summary.average_amount_transfered_from_nmb_to_wallet)}</td>
            <td>{dateSplicer(data.NMB_Summary.last_date_transferred_from_nmb)}</td>
            <td>{numberEdit(data.NMB_Summary.last_amount_transferred_from_nmb_to_wallet)}</td>

            </tr>

            </table>
            </div>

            </div>
      </div>
    );
  };
  
  export default Banking;