import React from 'react';
import { Adata } from '../../../Data/data';
import '../../../styles/pages.css';
import { dateSplicer,numberEdit } from '../../../Data/functions';
import { Dchart } from '../../Charts.jsx/Doghnut';


// for bill transactions
const AExpenses =()=>{
   
    var data=Adata;

    const labels=['LUKU','YATOSHA','BILL PAYMENTS']
    const Chartdata1={
      labels:labels,
      datasets:[{
        label:'total amount ',
        data:[(data.luku.Total_amount_used_to_buy_luku),
          (data.yatosha.total_amount_spent_on_yatosha),
          data.payments.total_amount_paid
         
          ]
      }],
      backgroundColor:['yellow','blue','white']
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
            <td> {dateSplicer(data.luku.Last_time_bought_luku)}</td>
            <td>{data.luku.Number_of_times_bought_luku}</td>
            <td>{numberEdit(data.luku.Maximum_amount_used_to_buy_luku)}</td>
           

            </tr>
            
            </table>

            <table>

         
            <tr>
                <th colSpan={4}> Bill payment</th>
            </tr>
            <tr>
            <th> last date bought </th>
            <th> number of times purchased</th>
            <th> max amount</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.payments.last_day_paid)}</td>
            <td>{data.payments.number_of_times_paid}</td>
            <td>{numberEdit(data.payments.max_amount_paid)}</td>
            <td>{numberEdit(data.payments.last_amount_paid)}</td>

            </tr>
            
            </table>

            <table>

           
            <tr>
                <th colSpan={4}> YATOSHA summary</th>
            </tr>
            <tr>
            <th> last date bought </th>
            <th> number of times purchased</th>
            <th> max amount</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {dateSplicer(data.yatosha.last_day_bought_yatosha)}</td>
            <td>{data.yatosha.number_of_times_bought_yatosha}</td>
            <td>{numberEdit(data.yatosha.max_amount_spent_on_yatosha) }</td>
            <td>{numberEdit(data.yatosha.last_amount_spent_on_yatosha)}</td>
            

            </tr>
            
            </table>
            </div>

            <div className="charts">

                <div className="chart-average">{Dchart(Chartdata1,'average usage')}</div> 
                
            </div>
       </div>
    )



};

export default AExpenses;