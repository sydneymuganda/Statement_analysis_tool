import React from "react";
import { data2 } from '../../Data/data';
import { dateSplicer,numberEdit } from "../../Data/functions";
import { Dchart } from "../Charts.jsx/Doghnut";
import '../../styles/pages.css';
import {useLocation} from 'react-router-dom'
// for bill transactions
const Loandata =()=>{
const location=useLocation();
  var data=data2;
  if (location.state!==null){ data= JSON.parse(location.state.response)};
    return(
       <div className="expenses-container">
         <div className="banking-table">

         <h2> Loan Analysis</h2>

        <table>

            
            <tr>
                <th colSpan={6}> Songesha</th>
            </tr>
            <tr>
            <th> total amount disbursed </th>
            <th> max amount disbursed</th>
            <th> number of times disbursed</th>
            <th> average amount disbursed</th>
            <th> last date borrowed</th>
            <th> ratio of amount disbursed to repaid</th>
            </tr>

            <tr>
            <td>{numberEdit(data.songesha_summary.Total_songesha_Amount_Disbursed)}</td>
            <td>{numberEdit(data.songesha_summary.Max_songesha_Amount_Disbursed)}</td>
            
            <td>{data.songesha_summary.Number_of_songesha_Loans_disbursed}</td>
            <td>{numberEdit(data.songesha_summary.average_songesha_amount_disbursed)}</td>
            <td> {dateSplicer(data.songesha_summary.last_day_borrowed_songesha)}</td>
            <td>{data.songesha_summary.Total_songesha_Amount_Disbursed_Per_Repaid}</td>
            

            </tr>

            <tr>
            <th> total amount repaid </th>
            <th> max amount repaid</th>
            <th> number of times repaid</th>
            <th> average amount repaid</th>
            <th> last date repaid</th>
            <th> ratio of amount repaid to repaid</th>
            </tr>

            <tr>
            <td>{numberEdit(data.songesha_summary.Total_songesha_amount_Repaid)}</td>
            <td>{numberEdit(data.songesha_summary.Max_songesha_Amount_repaid)}</td>
            
            <td>{data.songesha_summary.Number_of_times_repaid_songesha}</td>
            <td>{numberEdit(data.songesha_summary.average_songesha_amount_repaid)}</td>
            <td> {dateSplicer(data.songesha_summary.last_day_repaid_songesha)}</td>
            
            

            </tr>
            
            </table>

            <table>

         
            <tr>
                <th colSpan={6}> Mpawa</th>
            </tr>
            <tr>
            <th> total amount disbursed </th>
            <th> max amount disbursed</th>
            <th> number of times disbursed</th>
            <th> average amount disbursed</th>
            <th> last date borrowed</th>
            <th> ratio of amount disbursed to repaid</th>
            </tr>

            <tr>
            <td>{numberEdit(data.mpawa_summary.Total_mpawa_Amount_Disbursed)}</td>
            <td>{numberEdit(data.mpawa_summary.Max_mpawa_Amount_Disbursed)}</td>
            
            <td>{data.mpawa_summary.Number_of_mpawa_Loans_disbursed}</td>
            <td>{numberEdit(data.mpawa_summary.Average_mpawa_amount_disbursed)}</td>
            <td> {dateSplicer(data.mpawa_summary.last_day_borrowed_mpawa)}</td>
            <td>{data.mpawa_summary.total_mpawa_amount_disbursed_to_repaid}</td>
            

            </tr>

            <tr>
            <th> total amount repaid </th>
            <th> max amount repaid</th>
            <th> number of times repaid</th>
            <th> average amount repaid</th>
            <th> last date repaid</th>
            
            </tr>

            <tr>
            <td>{numberEdit(data.mpawa_summary.Total_mpawa_Amount_Disbursed)}</td>
            <td>{numberEdit(data.mpawa_summary.Max_mpawa_Amount_Disbursed)}</td>
            
            <td>{data.mpawa_summary.Number_of_times_repaid_mpawa}</td>
            <td>{numberEdit(data.mpawa_summary.average_mpawa_amount_repaid)}</td>
            <td> {dateSplicer(data.mpawa_summary.last_day_repaid_mpawa)}</td>
            
            

            </tr>
            </table>
            <table>

           
            <tr>
                <th colSpan={6}> Mgodi</th>
            </tr>
            <tr>
            <th> total amount disbursed </th>
            <th> max amount disbursed</th>
            <th> number of times disbursed</th>
            <th> average amount disbursed</th>
            <th> last date borrowed</th>
            <th> ratio of amount disbursed to repaid</th>
            </tr>

            <tr>
            <td>{numberEdit(data.mgodi_summary.Total_mgodi_Amount_Disbursed)}</td>
            <td>{numberEdit(data.mgodi_summary.Max_mgodi_Amount_Disbursed)}</td>
            
            <td>{data.mgodi_summary.Number_of_mgodi_Loans_disbursed}</td>
            <td>{numberEdit(data.mgodi_summary.Average_mgodi_amount_disbursed)}</td>
            <td> {dateSplicer(data.mgodi_summary.last_day_borrowed_mgodi)}</td>
            <td>{numberEdit(data.mgodi_summary.total_mgodi_amount_disbursed_to_repaid)}</td>
            

            </tr>

            <tr>
            <th> total amount repaid </th>
            <th> max amount repaid</th>
            <th> number of times repaid</th>
            <th> average amount repaid</th>
            <th > last date repaid</th>
            
            </tr>

            <tr>
            <td>{numberEdit(data.mgodi_summary.Total_mgodi_amount_Repaid)}</td>
            <td>{numberEdit(data.mgodi_summary.Max_mgodi_Amount_repaid)}</td>
            
            <td>{data.mgodi_summary.Number_of_times_repaid_mgodi}</td>
            <td>{numberEdit(data.mgodi_summary.average_mgodi_amount_repaid)}</td>
            <td> {dateSplicer(data.mgodi_summary.last_day_repaid_mgodi)}</td>
           
            

            </tr>

            </table>

            <table>

           
                <tr>
                    <th colSpan={6}> Chokomoka</th>
                </tr>
                <tr>
                <th> total amount repaid </th>
                <th> max amount repaid</th>
                <th> number of times repaid</th>
                <th> average amount repaid</th>
                <th> last amount repaid</th>
                <th> last date repaid</th>
               
                </tr>

                <tr>
                <td>{numberEdit(data.chomoka_summary.Total_chomoka_amount_Repaid)}</td>
                <td>{numberEdit(data.chomoka_summary.Max_chomoka_Amount_repaid)}</td>

                <td>{data.chomoka_summary.Number_of_chomoka_Loans_repaid}</td>
                <td>{numberEdit(data.chomoka_summary.Average_chomoka_amount_repaid)}</td>
                <td> {numberEdit(data.chomoka_summary.last_chomoka_amount_repaid)}</td>
                <td> {dateSplicer(data.chomoka_summary.last_day_repaid_chomoka)}</td>
               


                </tr>

            

</table>

            </div>

           
       </div>
    )



};

export default Loandata;