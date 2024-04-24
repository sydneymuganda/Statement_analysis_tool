import React from 'react';
import { Hdata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';
import { Dchart } from '../../Charts.jsx/Doghnut';


// for bill transactions
const HExpenses =()=>{
  
    var data=Hdata;

    const labels=['LUKU','BUNDLE  ','MERCHANT PAYMENTS']
    const Chartdata1={
      labels:labels,
      datasets:[{
        label:'total amount ',
        data:[(data.luku.total_amount_used_to_buy_luku),
          (data.bundle.total_amount_spent_on_yatosha),
          data.merchant_payments.total_amount_paid
         
          ]
      }],
      backgroundColor:['yellow','blue','white']
      ,
      circumference:180,
      rotation:270,
      
      };
      const Chartdata2={
        labels:labels,
        datasets:[{
          label:'average amount ',
          data:[(data.luku.average_amount_bought_luku),
            (data.bundle.average_amount_spent_on_yatosha),
            (data.merchant_payments.average_amount_paid)
           
            ]
        }],
        backgroundColor:['red','green','blue']
        ,
        circumference:180,
        rotation:270,
        
        };
      
      
    
    return(
       <div className="expenses-container">
         <div className="banking-table">

         <h2> Bill Analysis</h2>

        <table>

            
            <tr>
                <th colSpan={4}> LUKU</th>
            </tr>
            <tr>
            <th> last date bought </th>
            <th> number of times purchased</th>
            <th> max amount</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.luku.last_time_bought_luku)}</td>
            <td>{data.luku.number_of_times_bought_luku}</td>
            <td>{numberEdit(data.luku.maximum_amount_used_to_buy_luku)}</td>
           

            </tr>
            
            </table>

            <table>

         
            <tr>
                <th colSpan={4}> Merchant payment</th>
            </tr>
            <tr>
            <th> last date bought </th>
            <th> number of times purchased</th>
            <th> max amount</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.merchant_payments.last_day_paid)}</td>
            <td>{data.merchant_payments.number_of_times_paid}</td>
            <td>{numberEdit(data.merchant_payments.max_amount_paid)}</td>
            <td>{numberEdit(data.merchant_payments.last_amount_paid)}</td>

            </tr>
            
            </table>

            <table>

           
            <tr>
                <th colSpan={4}> BUNDLE summary</th>
            </tr>
            <tr>
            <th> last date bought </th>
            <th> number of times purchased</th>
            <th> max amount</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.bundle.last_day_bought_yatosha)}</td>
            <td>{data.bundle.number_of_times_bought_yatosha}</td>
            <td>{numberEdit(data.bundle.max_amount_spent_on_yatosha)} </td>
            <td>{numberEdit(data.bundle.last_amount_spent_on_yatosha)}</td>
            

            </tr>
            
            </table>
            </div>

            <div className="charts">

                <div className="chart-average">{Dchart(Chartdata1,'total expenses')}</div> 
                <div className="chart-average" >{Dchart(Chartdata2,'total average expenses')}</div>
                
            </div>
       </div>
    )



};

export default HExpenses;