import React from 'react';
import { Adata } from '../../../Data/data';
import '../../../styles/pages.css';

import { Dchart } from '../../Charts.jsx/Doghnut';


const ABanking = () => {

  var data=Adata;
  
  const labels=['B2W','W2B']
  const Chartdata1={
    labels:labels,
    datasets:[{
      label:'amount transfered',
      data:[(0),
        (0),
       
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
        data:[(0),
          (0),
         
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
            <td> {'n/a'}</td>
            <td>{'n/a'}</td>
            <td>{'n/a'}</td>
            
 
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
           <td> {'n/a'}</td>
            <td>{'n/a'}</td>
            <td>{'n/a'}</td>

            </tr>

            </table>
            </div>

            </div>
      </div>
    );
  };
  
  export default ABanking;