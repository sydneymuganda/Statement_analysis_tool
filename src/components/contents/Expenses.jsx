import React from "react";
import { data2,data } from '../../Data/data';

// for bill transactions
const Expenses =()=>{

    return(
       <div className="expenses-container">
         <div className="table1">

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
            <td> {data.Luku_Summary.last_date_bought_luku}</td>
            <td>{data.Luku_Summary.number_of_times_bought_luku}</td>
            <td>{data.Luku_Summary.max_amount_bought_luku}</td>
            <td>{data.Luku_Summary.last_amount_bought_luku}</td>

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
            <td> {data.bill_payment_summary.last_date_paid_bills}</td>
            <td>{data.bill_payment_summary.number_of_times_bills_paid}</td>
            <td>{data.bill_payment_summary.max_amount_paid_bills}</td>
            <td>{data.bill_payment_summary.last_amount_paid_bills}</td>

            </tr>
            
            </table>

            <table>

           
            <tr>
                <th colSpan={4}> LIPA summary</th>
            </tr>
            <tr>
            <th> last date bought </th>
            <th> number of times purchased</th>
            <th> max amount</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {data.lipa_summary.last_date_paid_via_lipa}</td>
            <td>{data.lipa_summary.number_of_times_paid_via_lipa}</td>
            <td>{data.lipa_summary.max_amount_paid_via_lipa}</td>
            <td>{data.lipa_summary.last_amount_paid_via_lipa}</td>

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

export default Expenses;