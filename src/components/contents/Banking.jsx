import React from 'react';
import { data } from '../../Data/data';
import '../../styles/pages.css';

const Banking = () => {
    return (
      <div className='page'> 
      <div>
        <h1>chart1</h1>
      </div>

      <div>
        chart2
      </div>
      
        <table>

            <caption> Banking Analysis</caption>
            <tr>
                <th colSpan={4}> CRDB</th>
            </tr>
            <tr>
            <th> max</th>
            <th> average</th>
            <th> last transaction</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {data.CRDB_Summary.max_amount_transfered_from_crdb_to_wallet}</td>
            <td>{data.CRDB_Summary.average_amount_transfered_from_crdb_to_wallet}</td>
            <td>{data.CRDB_Summary.last_date_transferred_from_crdb}</td>
            <td>{data.CRDB_Summary.last_amount_transferred_from_crdb_to_wallet}</td>

            </tr>

            <tr>
                <th colSpan={4}> CRDB</th>
            </tr>
            <tr>
            <th> max</th>
            <th> average</th>
            <th> last transaction</th>
            <th> last amount</th>
            </tr>

            <tr>
            <td> {data.NMB_Summary.max_amount_transfered_from_nmb_to_wallet}</td>
            <td>{data.NMB_Summary.average_amount_transfered_from_nmb_to_wallet}</td>
            <td>{data.NMB_Summary.last_date_transferred_from_nmb}</td>
            <td>{data.NMB_Summary.last_amount_transferred_from_nmb_to_wallet}</td>

            </tr>

            </table>
        
      </div>
    );
  };
  
  export default Banking;