//require('dotenv').config();
//console.log(process.env);

async function uploadPDF(file, fullname, token="TGqrFD45yIPKAHxgSJW8QWAS") {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fullname', fullname);
  
      const response = await fetch('https://api.sat.tausi.africa/v1/mpesa/upload_pdf', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload PDF');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error uploading PDF:', error);
      return null;
    }
  }
  

export const data={
    "info": {
        "owners_number": "25575633XXXX",
        "start_date": "2023-06-30 03:25:00",
        "end_date": "2024-02-26 07:12:00",
        "total_days": 242,
        "total_active_days": 127
    },
    "profile": {
        "current_wallet_balance": 0.04,
        "turnover": 48594106.0,
        "number_of_transactions": 953
    },
    "cashin_flow": {
        "total_cash-in_flow": 24489861.0,
        "cash-in_flow_to_turnover_percentage": 50.4,
        "cash-in_flow_transactions": 324,
        "cash-in_trans_to_total_trans_percentage": 34.0
    },
    "cashout_flow": {
        "Total_cash-out_flow": 24104245.0,
        "Cash-out_flow_to_turnover_percentage": 49.6,
        "Cash-out_flow_transactions": 629,
        "Cash-out_trans_to_total_trans_percentage": 66.0
    },
    "CRDB_Summary": {
        "total_Amount_transfered_from_crdb_to_wallet": 2005500.0,
        "max_amount_transfered_from_crdb_to_wallet": 650000.0,
        "number_of_times_transfered_from_crdb_to_wallet": 16,
        "average_amount_transfered_from_crdb_to_wallet": 125343.75,
        "last_date_transferred_from_crdb": "2024-02-15 01:40:00",
        "last_amount_transferred_from_crdb_to_wallet": 15000.0
    },
    "NMB_Summary": {
        "total_Amount_transfered_from_nmb_to_wallet": 500000.0,
        "max_amount_transfered_from_nmb_to_wallet": 250000.0,
        "number_of_times_transfered_from_nmb_to_wallet": 2,
        "average_amount_transfered_from_nmb_to_wallet": 250000.0,
        "last_date_transferred_from_nmb": "2023-09-06 06:21:00",
        "last_amount_transferred_from_nmb_to_wallet": 250000.0
    },
    "Luku_Summary": {
        "last_date_bought_luku": "2024-02-26 07:12:00",
        "total_luku_amount": 197000.0,
        "max_amount_bought_luku": 40000.0,
        "number_of_times_bought_luku": 12,
        "last_amount_bought_luku": 2000.0,
        "average_amount_bought_luku": 16416.666666666668
    },
    "agent_deposit_summary": {
        "last_date_deposited": "2023-12-11 10:14:00",
        "total_amount_deposited": 4745000.0,
        "max_amount_deposited": 1000000.0,
        "number_of_times_deposited": 15,
        "last_amount_deposited": 290000.0,
        "average_amount_deposited": 316333.3333333333
    },
    "agent_withdraw_summary": {
        "last_date_of_withdrawal_via_agent": "2024-02-23 09:53:00",
        "total_amount_withdrawn_via_agent": 2387000.0,
        "max_amount_withdrawn_via_agent": 1180000.0,
        "number_of_times_withdrawn": 17,
        "last_amount_of_withdrawn_via_agent": 50000.0,
        "average_amount_withdrawn": 140411.76470588235
    },
    "money_sent_p2p_summary": {
        "last_date_of_money_sent_to_peer": "2023-12-05 09:44:00",
        "total_amount_sent_to_peer": 1610000.0,
        "max_amount_sent_to_peer": 665000.0,
        "number_of_times_sent_to_peer": 12,
        "last_amount_sent_to_peer": 125000.0,
        "average_amount_sent_to_peer": 134166.66666666666
    },
    "money_received_p2p_or_business": {
        "last_date_of_money_received_from_peer_or_business": "2023-12-16 02:17:00",
        "total_amount_received_from_peer_or_business": 1911345.0,
        "max_amount_received_from_peer_or_business": 515000.0,
        "last_amount_received_from_peer_or_business": 1426.0,
        "number_of_times_received_from_peer_or_business": 18,
        "average_amount_received_from_peer_or_business": 106185.83
    },
    "lipa_summary": {
        "last_date_paid_via_lipa": "2024-02-22 07:49:00",
        "total_amount_paid_via_lipa": 2640700.0,
        "max_amount_paid_via_lipa": 525000.0,
        "number_of_times_paid_via_lipa": 94,
        "last_amount_paid_via_lipa": 40000.0,
        "average_lipa_amount": 28092.55
    },
    "bill_payment_summary": {
        "last_date_paid_bills": "2024-02-26 07:12:00",
        "total_amount_paid_bills": 6400175.96,
        "max_amount_paid_bills": 1100000.0,
        "number_of_times_bills_paid": 116,
        "average_bills_amount": 55173.93,
        "last_amount_paid_bills": 2000.0
    },
    "songesha_summary": {
        "Total_songesha_Amount_Disbursed": 4612956.0,
        "Max_songesha_Amount_Disbursed": 103453.0,
        "Number_of_songesha_Loans_disbursed": 237,
        "average_songesha_amount_disbursed": 19463.95,
        "last_songesha_loan_amount": 2040.0,
        "last_day_borrowed_songesha": "2024-02-26 07:12:00",
        "Total_songesha_amount_Repaid": 4965529.0,
        "Max_songesha_Amount_repaid": 111729.0,
        "Number_of_times_repaid_songesha": 259,
        "average_songesha_amount_repaid": 19171.93,
        "last_day_repaid_songesha": "2024-02-23 09:14:00",
        "last_songesha_amount_repaid": 45320.0,
        "Total_songesha_Amount_Disbursed_Per_Repaid": 0.93
    },
    "chomoka_summary": {
        "Total_chomoka_amount_Repaid": 334150.0,
        "Max_chomoka_Amount_repaid": 73450.0,
        "Average_chomoka_amount_repaid": 55691.67,
        "Number_of_chomoka_Loans_repaid": 6,
        "last_day_repaid_chomoka": "2023-12-02 12:53:00",
        "last_chomoka_amount_repaid": 34500.0
    },
    "mpawa_summary": {
        "Total_mpawa_Amount_Disbursed": 214650.0,
        "Max_mpawa_Amount_Disbursed": 56700.0,
        "Number_of_mpawa_Loans_disbursed": 4,
        "Average_mpawa_amount_disbursed": 53662.5,
        "last_day_borrowed_mpawa": "2024-02-12 07:23:00",
        "last_mpawa_amount_disbursed": 44550.0,
        "Total_mpawa_amount_Repaid": 291000.0,
        "Max_mpawa_Amount_repaid": 77000.0,
        "average_mpawa_amount_repaid": 72750.0,
        "Number_of_times_repaid_mpawa": 4,
        "last_day_repaid_mpawa": "2023-12-02 12:52:00",
        "last_mpawa_amount_repaid": 77000.0,
        "total_mpawa_amount_disbursed_to_repaid": 0.7376288659793815
    },
    "mgodi_summary": {
        "Total_mgodi_Amount_Disbursed": 0.0,
        "Max_mgodi_Amount_Disbursed": 0.0,
        "Number_of_mgodi_Loans_disbursed": 0,
        "Average_mgodi_amount_disbursed": 0.0,
        "last_day_borrowed_mgodi": "N/A",
        "last_mgodi_amount_disbursed": 0.0,
        "Total_mgodi_amount_Repaid": 100000.0,
        "Max_mgodi_Amount_repaid": 100000.0,
        "average_mgodi_amount_repaid": 100000.0,
        "Number_of_times_repaid_mgodi": 1,
        "last_day_repaid_mgodi": "2023-07-26 01:54:00",
        "last_mgodi_amount_repaid": 100000.0,
        "total_mgodi_amount_disbursed_to_repaid": 0.0
    }
};
export  const data2={
    "info": {
        "owners_number": "255756339626",
        "start_date": "2023-06-30 03:25:00",
        "end_date": "2024-02-26 07:12:00",
        "total_days": 242,
        "total_active_days": 127
    },
    "profile": {
        "current_wallet_balance": 0.04,
        "turnover": 48594106.0,
        "number_of_transactions": 953
    },
    "cashin_flow": {
        "total_cash-in_flow": 24489861.0,
        "cash-in_flow_to_turnover_percentage": 50.4,
        "cash-in_flow_transactions": 324,
        "cash-in_trans_to_total_trans_percentage": 34.0
    },
    "cashout_flow": {
        "Total_cash-out_flow": 24104245.0,
        "Cash-out_flow_to_turnover_percentage": 49.6,
        "Cash-out_flow_transactions": 629,
        "Cash-out_trans_to_total_trans_percentage": 66.0
    },
    "CRDB_Summary": {
        "total_Amount_transfered_from_crdb_to_wallet": 2005500.0,
        "max_amount_transfered_from_crdb_to_wallet": 650000.0,
        "number_of_times_transfered_from_crdb_to_wallet": 16,
        "average_amount_transfered_from_crdb_to_wallet": 125343.75,
        "last_date_transferred_from_crdb": "2024-02-15 01:40:00",
        "last_amount_transferred_from_crdb_to_wallet": 15000.0
    },
    "NMB_Summary": {
        "total_Amount_transfered_from_nmb_to_wallet": 500000.0,
        "max_amount_transfered_from_nmb_to_wallet": 250000.0,
        "number_of_times_transfered_from_nmb_to_wallet": 2,
        "average_amount_transfered_from_nmb_to_wallet": 250000.0,
        "last_date_transferred_from_nmb": "2023-09-06 06:21:00",
        "last_amount_transferred_from_nmb_to_wallet": 250000.0
    },
    "Luku_Summary": {
        "last_date_bought_luku": "2024-02-26 07:12:00",
        "total_luku_amount": 197000.0,
        "max_amount_bought_luku": 40000.0,
        "number_of_times_bought_luku": 12,
        "last_amount_bought_luku": 2000.0,
        "average_amount_bought_luku": 16416.666666666668
    },
    "agent_deposit_summary": {
        "last_date_deposited": "2023-12-11 10:14:00",
        "total_amount_deposited": 4745000.0,
        "max_amount_deposited": 1000000.0,
        "number_of_times_deposited": 15,
        "last_amount_deposited": 290000.0,
        "average_amount_deposited": 316333.3333333333
    },
    "agent_withdraw_summary": {
        "last_date_of_withdrawal_via_agent": "2024-02-23 09:53:00",
        "total_amount_withdrawn_via_agent": 2387000.0,
        "max_amount_withdrawn_via_agent": 1180000.0,
        "number_of_times_withdrawn": 17,
        "last_amount_of_withdrawn_via_agent": 50000.0,
        "average_amount_withdrawn": 140411.76470588235
    },
    "money_sent_p2p_summary": {
        "last_date_of_money_sent_to_peer": "2023-12-05 09:44:00",
        "total_amount_sent_to_peer": 1610000.0,
        "max_amount_sent_to_peer": 665000.0,
        "number_of_times_sent_to_peer": 12,
        "last_amount_sent_to_peer": 125000.0,
        "average_amount_sent_to_peer": 134166.66666666666
    },
    "money_received_p2p_or_business": {
        "last_date_of_money_received_from_peer_or_business": "2023-12-16 02:17:00",
        "total_amount_received_from_peer_or_business": 1911345.0,
        "max_amount_received_from_peer_or_business": 515000.0,
        "last_amount_received_from_peer_or_business": 1426.0,
        "number_of_times_received_from_peer_or_business": 18,
        "average_amount_received_from_peer_or_business": 106185.83
    },
    "lipa_summary": {
        "last_date_paid_via_lipa": "2024-02-22 07:49:00",
        "total_amount_paid_via_lipa": 2640700.0,
        "max_amount_paid_via_lipa": 525000.0,
        "number_of_times_paid_via_lipa": 94,
        "last_amount_paid_via_lipa": 40000.0,
        "average_lipa_amount": 28092.55
    },
    "bill_payment_summary": {
        "last_date_paid_bills": "2024-02-26 07:12:00",
        "total_amount_paid_bills": 6400175.96,
        "max_amount_paid_bills": 1100000.0,
        "number_of_times_bills_paid": 116,
        "average_bills_amount": 55173.93,
        "last_amount_paid_bills": 2000.0
    },
    "songesha_summary": {
        "Total_songesha_Amount_Disbursed": 4612956.0,
        "Max_songesha_Amount_Disbursed": 103453.0,
        "Number_of_songesha_Loans_disbursed": 237,
        "average_songesha_amount_disbursed": 19463.95,
        "last_songesha_loan_amount": 2040.0,
        "last_day_borrowed_songesha": "2024-02-26 07:12:00",
        "Total_songesha_amount_Repaid": 4965529.0,
        "Max_songesha_Amount_repaid": 111729.0,
        "Number_of_times_repaid_songesha": 259,
        "average_songesha_amount_repaid": 19171.93,
        "last_day_repaid_songesha": "2024-02-23 09:14:00",
        "last_songesha_amount_repaid": 45320.0,
        "Total_songesha_Amount_Disbursed_Per_Repaid": 0.93
    },
    "chomoka_summary": {
        "Total_chomoka_amount_Repaid": 334150.0,
        "Max_chomoka_Amount_repaid": 73450.0,
        "Average_chomoka_amount_repaid": 55691.67,
        "Number_of_chomoka_Loans_repaid": 6,
        "last_day_repaid_chomoka": "2023-12-02 12:53:00",
        "last_chomoka_amount_repaid": 34500.0
    },
    "mpawa_summary": {
        "Total_mpawa_Amount_Disbursed": 214650.0,
        "Max_mpawa_Amount_Disbursed": 56700.0,
        "Number_of_mpawa_Loans_disbursed": 4,
        "Average_mpawa_amount_disbursed": 53662.5,
        "last_day_borrowed_mpawa": "2024-02-12 07:23:00",
        "last_mpawa_amount_disbursed": 44550.0,
        "Total_mpawa_amount_Repaid": 291000.0,
        "Max_mpawa_Amount_repaid": 77000.0,
        "average_mpawa_amount_repaid": 72750.0,
        "Number_of_times_repaid_mpawa": 4,
        "last_day_repaid_mpawa": "2023-12-02 12:52:00",
        "last_mpawa_amount_repaid": 77000.0,
        "total_mpawa_amount_disbursed_to_repaid": 0.7376288659793815
    },
    "mgodi_summary": {
        "Total_mgodi_Amount_Disbursed": 0.0,
        "Max_mgodi_Amount_Disbursed": 0.0,
        "Number_of_mgodi_Loans_disbursed": 0,
        "Average_mgodi_amount_disbursed": 0.0,
        "last_day_borrowed_mgodi": "N/A",
        "last_mgodi_amount_disbursed": 0.0,
        "Total_mgodi_amount_Repaid": 100000.0,
        "Max_mgodi_Amount_repaid": 100000.0,
        "average_mgodi_amount_repaid": 100000.0,
        "Number_of_times_repaid_mgodi": 1,
        "last_day_repaid_mgodi": "2023-07-26 01:54:00",
        "last_mgodi_amount_repaid": 100000.0,
        "total_mgodi_amount_disbursed_to_repaid": 0.0
    }
};

